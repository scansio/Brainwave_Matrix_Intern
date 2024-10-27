/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { getDefinedValuesFrom } from '../../common'
import { GET_SUCCESS, BAD_REQUEST, POST_SUCCESS, NOTFOUND } from '../../configs/statusCodeConstants'
import ReplyModel from '../../models/blog/ReplyModel'
import PaginatingModel from '../../models/PaginatingModel'
import IReply from '../../types/blog/IReply'
import IUser from '../../types/IUser'
import BaseController from '../base/BaseController'

class Reply extends BaseController {
  constructor(req: Request, res: Response, next: NextFunction) {
    super(req, res, next)
  }

  async init(): Promise<boolean | IUser | null | undefined> {
    return true
  }

  async get({ id }: any) {
    const found = await ReplyModel.findById(`${id}`).exec()
    if (!found) this.status(false).statusCode(NOTFOUND).message('Reply not found').send()
    else this.status(true).statusCode(GET_SUCCESS).data('Reply', found).send()
  }

  async all() {
    const Replys = await new PaginatingModel<IReply>(ReplyModel, this).makePublic(true).exec()
    if (!Replys) this.status(false).statusCode(NOTFOUND).message('No Replys').send()
    else this.status(true).statusCode(GET_SUCCESS).data('Replys', Replys).send()
  }

  async create({ commentId, content }: any) {
    const created = await ReplyModel.create({
      commentId,
      content,
    })
    if (!created) this.status(false).statusCode(BAD_REQUEST).message('Error creating Reply').send()
    else this.status(true).statusCode(POST_SUCCESS).message('Reply created').data('created', created).send()
  }

  async update({ id, commentId, content, like, status }: any) {
    const definedValues = getDefinedValuesFrom({
      commentId,
      content,
      like,
      status,
    })
    const updated = await ReplyModel.findByIdAndUpdate(id, definedValues, {
      new: true,
    }).exec()
    if (!updated) this.status(false).statusCode(BAD_REQUEST).message('Reply failed to update due to error').send()
    else this.status(true).statusCode(POST_SUCCESS).message('Reply updated').data('update', updated).send()
  }

  async delete({ id }: any) {
    const deleted = await ReplyModel.findByIdAndDelete(id).exec()
    if (!deleted) this.status(false).statusCode(BAD_REQUEST).message('Reply failed to be deleted do to error').send()
    else this.status(true).statusCode(POST_SUCCESS).message('Reply deleted').data('deleted', deleted).send()
  }
}

export default Reply
