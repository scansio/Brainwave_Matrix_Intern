/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { getDefinedValuesFrom } from '../../common'
import { GET_SUCCESS, BAD_REQUEST, POST_SUCCESS, NOTFOUND } from '../../configs/statusCodeConstants'
import CommentModel from '../../models/blog/CommentModel'
import PaginatingModel from '../../models/PaginatingModel'
import IComment from '../../types/blog/IComment'
import IUser from '../../types/IUser'
import BaseController from '../base/BaseController'

class Comment extends BaseController {
  constructor(req: Request, res: Response, next: NextFunction) {
    super(req, res, next)
  }

  async init(): Promise<boolean | IUser | null | undefined> {
    return true
  }

  async get({ id }: any) {
    const found = await CommentModel.findById(`${id}`).exec()
    if (!found) this.status(false).statusCode(NOTFOUND).message('Comment not found').send()
    else this.status(true).statusCode(GET_SUCCESS).data('Comment', found).send()
  }

  async all() {
    const Comments = await new PaginatingModel<IComment>(CommentModel, this).makePublic(true).exec()
    if (!Comments) this.status(false).statusCode(NOTFOUND).message('No Comments').send()
    else this.status(true).statusCode(GET_SUCCESS).data('Comments', Comments).send()
  }

  async create({ articleId, content }: any) {
    const created = await CommentModel.create({
      articleId,
      content,
    })
    if (!created) this.status(false).statusCode(BAD_REQUEST).message('Error creating Comment').send()
    else this.status(true).statusCode(POST_SUCCESS).message('Comment created').data('created', created).send()
  }

  async update({ id, articleId, replyIds, content, like, status }: any) {
    const definedValues = getDefinedValuesFrom({
      articleId,
      replyIds,
      content,
      like,
      status,
    })
    const updated = await CommentModel.findByIdAndUpdate(id, definedValues, {
      new: true,
    }).exec()
    if (!updated) this.status(false).statusCode(BAD_REQUEST).message('Comment failed to update due to error').send()
    else this.status(true).statusCode(POST_SUCCESS).message('Comment updated').data('update', updated).send()
  }

  async delete({ id }: any) {
    const deleted = await CommentModel.findByIdAndDelete(id).exec()
    if (!deleted) this.status(false).statusCode(BAD_REQUEST).message('Comment failed to be deleted do to error').send()
    else this.status(true).statusCode(POST_SUCCESS).message('Comment deleted').data('deleted', deleted).send()
  }
}

export default Comment
