import { didMonthStartedToday } from '../../common'
import Logger from '../../miscs/Logger'
import UserModel from '../../models/UserModel'
import CronJob from '../base/CronJob'
import TimeSpan from '../base/TimeSpan'

class LastMonthUserTradeProfitAssignment extends CronJob {
  static type = TimeSpan.DAY

  constructor() {
    super()
  }

  async criteria() {
    return didMonthStartedToday()
  }

  async job() {
    UserModel.find()
      .exec()
      .then((users) => {
        for (const user of users) {
          UserModel.findByIdAndUpdate(user._id, {
            lastMonthProfit: user.currentMonthProfit || 0,
            currentMonthProfit: 0,

            lastMonthNumberOfTrade: user.currentMonthNumberOfTrade || 0,
            currentMonthNumberOfTrade: 0,

            lastMonthTradePercentage: user.currentMonthTradePercentage || 0,
            currentMonthTradePercentage: 0,
          })
            .exec()
            .catch((error) => {
              console.log(error)
              Logger.log('error', error)
            })
        }
      })
  }
}

export default LastMonthUserTradeProfitAssignment
