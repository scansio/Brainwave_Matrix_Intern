import node_paystack from '@aizon/node-paystack'
import { createHmac } from 'crypto'
import { config } from 'dotenv'
import IAny from '../types/IAny'
import { Request, Response } from 'express'
import { ACTIVE, PaystackHookEvent, TransactionMode } from '../configs/constants'
import PaymentDisputeModel from '../models/paystack/PaymentDisputeModel'
import TransactionModel from '../models/paystack/TransactionModel'
import PaystackEventLogModel from '../models/paystack/PaystackEventLogModel'
config()
const API_KEY = process.env.PAYSTACK_API_KEY

export function validatePaystackHook(req: Request, res: Response) {
  // Acknowledge response immediately
  res.status(200).send('OK')

  // Perform signature validation and processing asynchronously
  setImmediate(() => {
    const hash = createHmac('sha512', API_KEY as string)
      .update(JSON.stringify(req.body))
      .digest('hex')

    if (hash === req.headers['x-paystack-signature']) {
      processhook(req.body as object)
      PaystackEventLogModel.create({ raw: JSON.stringify(req.body) })
    }
  })
}

async function processhook(responseData: IAny) {
  const fn = (func: (event: PaystackHookEvent, data: object) => void) => {
    func(responseData.event, responseData)
  }

  switch (responseData.event) {
    case PaystackHookEvent.TRANSACTION_SUCCESS:
      fn(processTransaction)
      break

    case PaystackHookEvent.TRANSFER_SUCCESS:
    case PaystackHookEvent.TRANSFER_FAILED:
    case PaystackHookEvent.TRANSFER_REVERSED:
      fn(processTransfers)
      break

    case PaystackHookEvent.PAYMENTREQUEST_SUCCESS:
    case PaystackHookEvent.PAYMENTREQUEST_PENDING:
    case PaystackHookEvent.CHARGE_DISPUTE_CREATE:
      fn(processPaymentRequest)
      break

    case PaystackHookEvent.CHARGE_DISPUTE_RESOLVE:
    case PaystackHookEvent.CHARGE_DISPUTE_REMIND:
      fn(processDispute)
      break

    default:
      break
  }
}

async function processTransfers(event: PaystackHookEvent, data: IAny) {
  const transaction = await TransactionModel.findOne({ reference: data.reference, status: ACTIVE }).exec()

  switch (event) {
    case PaystackHookEvent.TRANSFER_SUCCESS:
      transaction && (transaction.mode = TransactionMode.SUCCESS)
      break

    case PaystackHookEvent.TRANSFER_FAILED:
      transaction && (transaction.mode = TransactionMode.FAILED)
      break

    case PaystackHookEvent.TRANSFER_REVERSED:
      transaction && (transaction.mode = TransactionMode.REVERSED)
      break

    default:
      break
  }

  transaction?.rawJSONData.push(JSON.stringify(data))
  transaction?.save()
}

async function processTransaction(event: PaystackHookEvent, data: IAny) {
  const transaction = await TransactionModel.findOne({ reference: data.data.reference, status: ACTIVE }).exec()
  switch (event) {
    case PaystackHookEvent.TRANSACTION_SUCCESS:
      transaction && (transaction.mode = TransactionMode.SUCCESS)
      break

    default:
      break
  }
  transaction?.rawJSONData.push(JSON.stringify(data))
  transaction?.save()
}

async function processPaymentRequest(event: PaystackHookEvent, data: IAny) {
  switch (event) {
    case PaystackHookEvent.PAYMENTREQUEST_SUCCESS:
      //TODO
      break

    case PaystackHookEvent.PAYMENTREQUEST_PENDING:
      //TODO
      break

    default:
      break
  }
}

async function processDispute(event: PaystackHookEvent, data: IAny) {
  const dispute = await PaymentDisputeModel.findOne({ id: data.id }).exec()

  switch (event) {
    case PaystackHookEvent.CHARGE_DISPUTE_CREATE:
      PaymentDisputeModel.create({ id: data.id, event: data.event, raw: JSON.stringify(data) })
      break

    case PaystackHookEvent.CHARGE_DISPUTE_RESOLVE:
      dispute && (dispute.resolved = data.status)
      break

    case PaystackHookEvent.CHARGE_DISPUTE_REMIND:
      dispute && (dispute.reminded = (dispute.reminded || 0) + 1)
      break

    default:
      break
  }
  dispute?.save()
}

export const Paystack = node_paystack(API_KEY || '')
