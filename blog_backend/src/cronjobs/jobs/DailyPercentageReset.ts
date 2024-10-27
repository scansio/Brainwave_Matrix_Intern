import Logger from '../../miscs/Logger'
import UserModel from '../../models/UserModel'
import CronJob from '../base/CronJob'
import TimeSpan from '../base/TimeSpan'

class DailyPercentageReset extends CronJob {
  static type = TimeSpan.DAY

  constructor() {
    super()
  }

  async criteria() {
    return true
  }

  async job() {
    UserModel.find()
      .exec()
      .then((users) => {
        for (const user of users) {
          UserModel.findByIdAndUpdate(user._id, {
            yesterdayNumberOfTrade: user.todayNumberOfTrade || 0,
            todayNumberOfTrade: 0,

            yesterdayProfit: user.todayProfit || 0,
            todayProfit: 0,

            yesterdayTradePercentage: user.todayTradePercentage || 0,
            todayTradePercentage: 0,
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

export default DailyPercentageReset
