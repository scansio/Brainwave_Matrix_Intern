/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { getDefinedValuesFrom } from '../../common'
import { GET_SUCCESS, BAD_REQUEST, POST_SUCCESS, NOTFOUND } from '../../configs/statusCodeConstants'
import CommentModel from '../../models/blog/CommentModel'
import PaginatingModel from '../../models/PaginatingModel'
import IComment from '../../types/blog/IComment'
import IUser from '../../types/IUser'
import BaseController from '../base/BaseController'
import ArticleModel from '../../models/blog/ArticleModel'

class Comment extends BaseController {
  constructor(req: Request, res: Response, next: NextFunction) {
    super(req, res, next)
  }

  async init(): Promise<boolean | IUser | null | undefined> {
    return true
  }

  async like({ id }: any) {
    await super.like({ model: CommentModel, id })
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

  async create({ uid, articleId, content }: any) {
    const article = await ArticleModel.findById(`${articleId}`).exec()
    if (!article) {
      return this.status(false).statusCode(BAD_REQUEST).message('Article not found').send()
    }

    const created = await (
      await CommentModel.create({
        uid: uid || this.user._id,
        articleId: article,
        content,
      })
    )?.populate(['uid'])
    if (!created) this.status(false).statusCode(BAD_REQUEST).message('Error creating Comment').send()
    else {
      article.numComments++
      await article.save()
      this.status(true).statusCode(POST_SUCCESS).message('Comment created').data('created', created).send()
    }
  }

  async update({ id, articleId, replyIds, content, likeByIds, numReplys, status }: any) {
    const definedValues = getDefinedValuesFrom({
      articleId,
      replyIds,
      content,
      likeByIds,
      numReplys,
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
