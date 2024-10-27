import { NextFunction, Request, Response } from 'express'
import Sender from './Sender'
import AllError from '../../exceptions/base/AllError'
import UserModel from '../../models/UserModel'
import {
  ACTIVE,
  ALLOWED_WITHDRAWAL_PERCENTAGE_PROFIT,
  ALLOWED_WITHDRAWAL_PERCENTAGE_REFERRAL,
  ALLOWED_WITHDRAWAL_PERCENTAGE_SPOT,
  AuthenticationLevel,
  MAXIMUM_DEPOSIT_AMOUNT,
  MINIMUM_DEPOSIT_AMOUNT,
  TransactionType,
  WITHDRAWAL_DAY,
  WITHDRAWAL_DAY_DEFAULT,
} from '../../configs/constants'
import IUser from '../../types/IUser'
import { BAD_AUTHORIZATION, BAD_REQUEST, NOTFOUND } from '../../configs/statusCodeConstants'
import {
  INCORRECT_TRANSACTION_PIN,
  INSUFFICIENT_BALANCE_PROFIT,
  INSUFFICIENT_BALANCE_REFERRAL,
  INSUFFICIENT_BALANCE_SPOT,
  INVALID_AMOUNT,
  OUT_OF_BOUNDARY,
  TRANSFERABLE_PERCENTAGE_EXCEEDED,
  USER_NOTFOUND,
  WITHDRAWABLE_PERCENTAGE_EXCEEDED,
} from '../../configs/errorCodeConstants'
import WalletModel from '../../models/WalletModel'
import { Model } from 'mongoose'
import IOption from '../../types/IOption'
import OptionModel from '../../models/OptionModel'
import SharedConfig from '../../libs/SharedConfig'
import { getUser, isToday, mongooseModelQueryObjectForTodayDoc } from '../../common'
import MaintenanceException from '../../exceptions/MaintenanceException'
import ProfitWalletModel from '../../models/ProfitWalletModel'
import UserReferralEarningModel from '../../models/UserReferralEarningModel'
import AuthenticationException from '../../exceptions/AuthenticationException'
import BankDetailModel from '../../models/paystack/BankDetailModel'
import IRide from '../../types/ride/IRide'
import RideModel from '../../models/ride/RideModel'
import Level1VerificationModel from '../../models/verification/Level1VerificationModel'
import Level2VerificationModel from '../../models/verification/Level2VerificationModel'

class BaseController extends Sender {
  constructor(req: Request, res: Response, next: NextFunction) {
    super(req, res, next)
  }

  public error404() {
    const error = new AllError('Route method not found')
    error.status = NOTFOUND
    throw error
  }

  async initConstruct() {
    SharedConfig.set('controller', this)
    SharedConfig.set('user', getUser(this.req))
    SharedConfig.set('response', this.res)
    SharedConfig.set('request', this.req)

    SharedConfig.set(process.env)

    const options: IOption[] = await OptionModel.find().exec()
    for (const option of options) {
      SharedConfig.set(option.name, option.value)
    }
    if (this.isPrivateRoute) {
      switch (this.isPrivateRoute) {
        case AuthenticationLevel.END_USER:
          {
            await this.ownerAndAdminAccess(SharedConfig.get('user')?._id)
          }

          break

        case AuthenticationLevel.ADMIN:
          {
            await this.adminAccess()
          }
          break

        case AuthenticationLevel.DEVELOPER:
          {
            await this.developerAccess()
          }
          break

        default:
          throw new AuthenticationException(this)
          break
      }
    }

    //if (this.isPrivateRoute) {
    //Access to option are allowed even if site is under maintenance
    if (this.executingClassName !== 'Option') {
      const developers = await this.developerAccess(false)
      const admins = await this.adminAccess(false)

      //Blocks everyone except developers from accessing the api
      if (!developers && SharedConfig.get('SERVER_MAINTENANCE')) {
        throw new MaintenanceException(this)
      }

      //Allows only admins and developers access the api
      if (!admins && SharedConfig.get('BLOCK_ALL_USERS')) {
        throw new MaintenanceException(this)
      }

      //Blocks all admins from accessing the api
      if (!developers && admins && SharedConfig.get('BLOCK_ALL_ADMIN')) {
        throw new MaintenanceException(this)
      }
    }
    //}
  }

  adminAccess(throwException = true): IUser | null | undefined | boolean {
    const user = this?.user
    if (!user || (user.role !== AuthenticationLevel.DEVELOPER && user.role !== AuthenticationLevel.ADMIN)) {
      if (throwException) {
        this.statusCode(BAD_AUTHORIZATION).errorCode(OUT_OF_BOUNDARY).error('Out of Boundary').send()
      }
      return null
    }
    return user
  }

  developerAccess(throwException = true): IUser | null | undefined | boolean {
    const user = this?.user
    if (!user || user.role !== AuthenticationLevel.DEVELOPER) {
      if (throwException) {
        this.statusCode(BAD_AUTHORIZATION).errorCode(OUT_OF_BOUNDARY).error('Out of Boundary').send()
      }
      return null
    }
    return user
  }

  ownerAccess(uid: IUser['_id'], throwException = true) {
    if (this?.user?._id == uid) {
      return true
    } else {
      if (throwException) {
        this.errorCode(OUT_OF_BOUNDARY)
          .statusCode(BAD_AUTHORIZATION)
          .error("You don't have access to this resource")
          .send()
      }
    }
    return false
  }

  async ownerAndAdminAccess(uid: IUser['_id'], throwException = true) {
    if (this.cronJobAccess) {
      return true
    }
    const adminAccess = await this.adminAccess(false)
    if (adminAccess || this?.user?._id == uid) {
      return true
    } else {
      if (throwException) {
        this.errorCode(OUT_OF_BOUNDARY)
          .statusCode(BAD_AUTHORIZATION)
          .error("You don't have access to this resource")
          .send()
      }
    }
    return false
  }

  checkZeroAmount(amount: number, throwException = true) {
    if (!amount || amount <= 0) {
      if (throwException)
        this.status(false)
          .statusCode(BAD_REQUEST)
          .errorCode(INVALID_AMOUNT)
          .message("Amount can't be less than 0")
          .send()
      else return false
    }
    return amount
  }

  isValidTransactionType(type: TransactionType, throwException = true) {
    switch (type) {
      case TransactionType.DEPOSIT:
      case TransactionType.WITHDRAW:
        break

      default:
        if (throwException)
          this.status(false)
            .statusCode(BAD_REQUEST)
            .errorCode(INVALID_AMOUNT)
            .message('Invalid transaction type')
            .send()
        else return false
        break
    }
    return type
  }

  checkMinMaxDepositAmount(amount: number, throwException = true) {
    this.checkZeroAmount(amount)
    const minAmountDeposit = SharedConfig.get(MINIMUM_DEPOSIT_AMOUNT) || 1000
    const maxAmountDeposit = SharedConfig.get(MAXIMUM_DEPOSIT_AMOUNT) || 4999999

    if (amount < minAmountDeposit || amount < maxAmountDeposit) {
      if (throwException)
        this.status(false)
          .statusCode(BAD_REQUEST)
          .errorCode(INVALID_AMOUNT)
          .message(`Amount can't be less than ${minAmountDeposit} or greater than ${maxAmountDeposit}`)
          .send()
      else return false
    }
    return amount
  }

  async isValidUser(uid: IUser['_id'], throwException = true) {
    const user = await UserModel.findById(uid).exec()
    if (user) {
      return user
    } else {
      if (throwException) {
        this.statusCode(BAD_REQUEST).errorCode(USER_NOTFOUND).error('User does not exist').send()
      }
    }
    return null
  }

  async isValidRide(id: IRide['_id'], throwException = true) {
    const ride = await RideModel.findById(id).exec()
    if (ride) {
      return ride
    } else {
      if (throwException) {
        this.statusCode(BAD_REQUEST).error('Invalid ride').send()
      }
    }
    return null
  }

  async isVerifiedUser(uid: IUser['_id'], throwException = true) {
    const level1 = await Level1VerificationModel.findOne({ uid, completed: true, status: ACTIVE }).exec()
    const level2 = await Level2VerificationModel.findOne({ uid, completed: true, status: ACTIVE }).exec()
    if (level1 && level2) {
      return { level1, level2 }
    } else {
      if (throwException) {
        this.statusCode(BAD_REQUEST)
          .errorCode(USER_NOTFOUND)
          .error(
            this.user._id == uid
              ? 'Kindly complete your verification process to continue'
              : 'Kindly instruct the person you are booking for to complete there verification process',
          )
          .send()
      }
    }
    return null
  }

  async isVerifiedDriver(uid: IUser['_id'], throwException = true) {
    const level3 = await Level2VerificationModel.findOne({ uid, completed: true, status: ACTIVE }).exec()
    if (level3) {
      return level3
    } else {
      if (throwException) {
        this.statusCode(BAD_REQUEST)
          .errorCode(USER_NOTFOUND)
          .error('Kindly complete your verification process to continue')
          .send()
      }
    }
    return null
  }

  async getBankDetail(uid: IUser['_id'], throwException = true) {
    const userBankDetail = await BankDetailModel.findOne({ uid, status: ACTIVE }).exec()
    if (userBankDetail) {
      return userBankDetail
    } else {
      if (throwException) {
        this.statusCode(BAD_REQUEST)
          .errorCode(USER_NOTFOUND)
          .error('Kindly complete your bank verification process to continue')
          .send()
      }
    }
    return null
  }

  async isValidUserPin(uid: IUser['_id'], pin: string | number, throwException = true) {
    const user = await UserModel.findOne({ _id: uid, pin }).exec()
    if (pin && `${pin}`.trim() !== '' && user) {
      return user
    } else {
      if (throwException) {
        this.statusCode(BAD_REQUEST)
          .errorCode(INCORRECT_TRANSACTION_PIN)
          .error('Incorrect pin OR Create transaction pin in Setting > Change Pin')
          .send()
      }
    }
    return null
  }

  async hasSufficientBalanceWallet(uid: IUser['_id'], amount: number, throwException = true) {
    const wallet = await WalletModel.findOne({ uid }).exec()
    const balance = wallet && (await wallet.getBalance())
    const sufficientBalance = <number>balance >= amount
    if (sufficientBalance) {
      return balance
    } else {
      if (throwException) {
        this.status(false)
          .errorCode(INSUFFICIENT_BALANCE_SPOT)
          .statusCode(BAD_REQUEST)
          .message('Insufficient balance')
          .send()
      }
    }
    return false
  }

  async hasSufficientBalanceProfitWallet(uid: IUser['_id'], amount: number, throwException = true) {
    const balance = await ProfitWalletModel.balance(uid)
    const sufficientBalance = balance >= amount
    if (sufficientBalance) {
      return balance
    } else {
      if (throwException) {
        this.status(false)
          .errorCode(INSUFFICIENT_BALANCE_PROFIT)
          .statusCode(BAD_REQUEST)
          .message('Insufficient profit balance')
          .send()
      }
    }
    return false
  }

  async hasSufficientBalanceUserReferralEarning(uid: IUser['_id'], amount: number, throwException = true) {
    const balance = await UserReferralEarningModel.balance(uid)
    const sufficientBalance = balance >= amount
    if (sufficientBalance) {
      return balance
    } else {
      if (throwException) {
        this.status(false)
          .errorCode(INSUFFICIENT_BALANCE_REFERRAL)
          .statusCode(BAD_REQUEST)
          .message('Insufficient sales wallet balance')
          .send()
      }
    }
    return false
  }

  async checkPercentageSpotWithdraw(uid: IUser['_id'], amount: number, throwException = true) {
    this.checkZeroAmount(amount)
    await this.hasSufficientBalanceWallet(uid, amount)
    const percentage =
      (SharedConfig.get('ALLOWED_WITHDRAWAL_PERCENTAGE_SPOT') || ALLOWED_WITHDRAWAL_PERCENTAGE_SPOT) / 100.0

    const userWallet = await WalletModel.findOne({ uid }).exec()
    const userBalance = await userWallet?.getBalance()
    const percentageAmount = percentage * <number>userBalance

    if (amount <= percentageAmount) {
      return true
    } else {
      if (throwException) {
        this.status(false)
          .errorCode(WITHDRAWABLE_PERCENTAGE_EXCEEDED)
          .statusCode(BAD_REQUEST)
          .message('Withrawable amount exceeded')
          .send()
      }
    }
    return false
  }

  async checkPercentageProfitTransfer(uid: IUser['_id'], amount: number, throwException = true) {
    this.checkZeroAmount(amount)
    const percentage =
      (SharedConfig.get('ALLOWED_WITHDRAWAL_PERCENTAGE_PROFIT') || ALLOWED_WITHDRAWAL_PERCENTAGE_PROFIT) / 100.0

    const balance = await ProfitWalletModel.balance(uid)
    const percentageAmount = percentage * balance

    if (amount <= percentageAmount) {
      return true
    } else {
      if (throwException) {
        this.status(false)
          .errorCode(TRANSFERABLE_PERCENTAGE_EXCEEDED)
          .statusCode(BAD_REQUEST)
          .message('Transferable amount exceeded')
          .send()
      }
    }
    return false
  }

  async checkWithdrawalDay<T>(uid: IUser['_id'], model: Model<T>, throwException = true) {
    const userTransactions = await model
      .find({
        uid,
        status: ACTIVE,
        ...mongooseModelQueryObjectForTodayDoc('createdAt.date'),
      })
      .exec()

    const withdrawal_day = SharedConfig.get(WITHDRAWAL_DAY) || WITHDRAWAL_DAY_DEFAULT

    if ((!userTransactions || userTransactions.length <= 0) && isToday(withdrawal_day)) {
      return true
    } else {
      if (throwException) {
        this.status(false)
          //.errorCode(TRANSFERABLE_PERCENTAGE_EXCEEDED)
          .statusCode(BAD_REQUEST)
          .message(`You can only withdraw/transfer from profit/bonus wallets once every ${withdrawal_day}`)
          .send()
      }
    }
    return false
  }

  async checkPercentageReferralTransfer(uid: IUser['_id'], amount: number, throwException = true) {
    this.checkZeroAmount(amount)
    const percentage =
      (SharedConfig.get('ALLOWED_WITHDRAWAL_PERCENTAGE_REFERRAL') || ALLOWED_WITHDRAWAL_PERCENTAGE_REFERRAL) / 100.0

    const balance = await UserReferralEarningModel.balance(uid)
    const percentageAmount = percentage * balance

    if (amount <= percentageAmount) {
      return true
    } else {
      if (throwException) {
        this.status(false)
          .errorCode(TRANSFERABLE_PERCENTAGE_EXCEEDED)
          .statusCode(BAD_REQUEST)
          .message('Transferable amount exceeded')
          .send()
      }
    }
    return false
  }

  /*  async checkTotalTradesLimit(uid: IUser["_id"], throwException = true) {
    const user = await this.isValidUser(uid);
    const totalTradesLimit = SharedConfig.get(TOTAL_TRADE_LIMIT) || 3;
    if ((user?.todayNumberOfTrade || 0) < totalTradesLimit) {
      return true;
    } else {
      if (throwException) {
        this.status(false)
          .errorCode(PLAN_MAXIMUM_TRADES_ALLOWED_EXCEEDED)
          .statusCode(BAD_REQUEST)
          .message(
            "You have exhausted maximum trades kindly wait for 24hrs or ativate auto trading"
          )
          .send();
      }
    }
    return false;
  } */
}

export default BaseController
