import { mongooseModelQueryObjectForDateRange } from '../../common'
import { ACTIVE } from '../../configs/constants'
import BookedRideModel from '../../models/ride/BookedRideModel'
import RideModel from '../../models/ride/RideModel'
import IRide from '../../types/ride/IRide'
import CronJob from '../base/CronJob'
import TimeSpan from '../base/TimeSpan'

class TimeoutPendingBookedRide extends CronJob {
  static type = TimeSpan.DAY

  async criteria() {
    const endedRides = await RideModel.find(mongooseModelQueryObjectForDateRange('yesterday'))
      .where({ status: ACTIVE, ended: true })
      .exec()
    //If there are active endedRide then the job should run
    return endedRides
  }

  constructor() {
    super()
  }

  async job(endedRides: IRide[]) {
    for (const endedRide of endedRides) {
      const bookedRides = await BookedRideModel.find({ rideId: endedRide._id, status: ACTIVE, ended: false }).exec()
      for (const bookedRide of bookedRides || []) {
        bookedRide.ended = true
        await bookedRide.save()
        bookedRide.shareProfit()
      }
    }
  }
}

export default TimeoutPendingBookedRide
