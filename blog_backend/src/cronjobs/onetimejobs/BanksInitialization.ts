import { ACTIVE } from '../../configs/constants'
import { Paystack } from '../../libs/Paystack'
import CountrieModel from '../../models/CountrieModel'
import BankModel from '../../models/paystack/BankModel'
import TransactionModel from '../../models/paystack/TransactionModel'
import CronJob from '../base/CronJob'

class BanksInitialization extends CronJob {
  async criteria() {
    const banks = await TransactionModel.find({ status: ACTIVE }).exec()
    return !(banks && banks.length > 0) && null
  }

  constructor() {
    super()
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async job(next: string | null, currency: any, country: string) {
    if (!currency || !country) {
      const supportedCountries = await CountrieModel.find({ supported: true, status: ACTIVE }).exec()
      for (const supportedCountry of supportedCountries || []) {
        await this.job(null, supportedCountry.currency, supportedCountry.iso3)
      }
      return
    }
    const remoteBanks = await Paystack.miscellaneous.listBanks({
      currency,
      country,
      per_page: 100,
      ...(next ? { next } : {}),
    })
    for (const remoteBank of remoteBanks?.data || []) {
      await BankModel.create(remoteBank)
    }
    if (remoteBanks.meta.next) {
      await this.job(remoteBanks.meta.next, currency, country)
    }
  }
}

export default BanksInitialization
