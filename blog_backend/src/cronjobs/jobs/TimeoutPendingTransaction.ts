import { INACTIVE, MINUTE, PENDING_APPROVAL, DEPOSIT } from '../../configs/constants'
import TransactionModel from '../../models/paystack/TransactionModel'
import ITransaction from '../../types/ITransaction'
import CronJob from '../base/CronJob'
import TimeSpan from '../base/TimeSpan'

class TimeoutPendingTransaction extends CronJob {
  static span = 20
  static type = TimeSpan.MINUTE

  async criteria() {
    const pendingTransactions = await TransactionModel.find({ status: PENDING_APPROVAL, type: DEPOSIT }).exec()
    //If there are active pendingTransactions then the job should run
    return pendingTransactions
  }

  constructor() {
    super()
  }

  async job(pendingTransactions: ITransaction[]) {
    for (const pendingTransaction of pendingTransactions) {
      const thisTime = Date.now()
      //5 minutes difference
      const thatTime = pendingTransaction.createdAt.time + MINUTE * TimeoutPendingTransaction.span
      if (thisTime > thatTime) {
        pendingTransaction.status = INACTIVE
        await pendingTransaction.save()
      }
    }
  }
}

export default TimeoutPendingTransaction