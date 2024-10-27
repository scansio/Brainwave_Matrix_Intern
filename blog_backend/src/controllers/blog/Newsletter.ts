/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { getDefinedValuesFrom } from '../../common'
import { GET_SUCCESS, BAD_REQUEST, POST_SUCCESS, NOTFOUND } from '../../configs/statusCodeConstants'
import NewsletterModel from '../../models/blog/NewsletterModel'
import PaginatingModel from '../../models/PaginatingModel'
import INewsletter from '../../types/blog/INewsletter'
import IUser from '../../types/IUser'
import BaseController from '../base/BaseController'

class Newsletter extends BaseController {
  constructor(req: Request, res: Response, next: NextFunction) {
    super(req, res, next)
  }

  async init(): Promise<boolean | IUser | null | undefined> {
    return true
  }

  async get({ id }: any) {
    const found = await NewsletterModel.findById(`${id}`).exec()
    if (!found) this.status(false).statusCode(NOTFOUND).message('Newsletter not found').send()
    else this.status(true).statusCode(GET_SUCCESS).data('Newsletter', found).send()
  }

  async all() {
    const Newsletters = await new PaginatingModel<INewsletter>(NewsletterModel, this).makePublic(true).exec()
    if (!Newsletters) this.status(false).statusCode(NOTFOUND).message('No Newsletters').send()
    else this.status(true).statusCode(GET_SUCCESS).data('Newsletters', Newsletters).send()
  }

  async create({ email, interestTagIds }: any) {
    const created = await NewsletterModel.create({
      email,
      interestTagIds,
    })
    if (!created) this.status(false).statusCode(BAD_REQUEST).message('Error creating Newsletter').send()
    else this.status(true).statusCode(POST_SUCCESS).message('Newsletter created').data('created', created).send()
  }

  async update({ id, email, interestTagIds, status }: any) {
    const definedValues = getDefinedValuesFrom({
      email,
      interestTagIds,
      status,
    })
    const updated = await NewsletterModel.findByIdAndUpdate(id, definedValues, {
      new: true,
    }).exec()
    if (!updated) this.status(false).statusCode(BAD_REQUEST).message('Newsletter failed to update due to error').send()
    else this.status(true).statusCode(POST_SUCCESS).message('Newsletter updated').data('update', updated).send()
  }

  async delete({ id }: any) {
    const deleted = await NewsletterModel.findByIdAndDelete(id).exec()
    if (!deleted)
      this.status(false).statusCode(BAD_REQUEST).message('Newsletter failed to be deleted do to error').send()
    else this.status(true).statusCode(POST_SUCCESS).message('Newsletter deleted').data('deleted', deleted).send()
  }
}

export default Newsletter
