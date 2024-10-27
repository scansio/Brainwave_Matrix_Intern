/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { getDefinedValuesFrom, sanitizeHTML } from '../../common'
import { GET_SUCCESS, BAD_REQUEST, POST_SUCCESS, NOTFOUND } from '../../configs/statusCodeConstants'
import ArticleModel from '../../models/blog/ArticleModel'
import PaginatingModel from '../../models/PaginatingModel'
import IArticle from '../../types/blog/IArticle'
import IUser from '../../types/IUser'
import BaseController from '../base/BaseController'

class Article extends BaseController {
  constructor(req: Request, res: Response, next: NextFunction) {
    super(req, res, next)
  }

  async init(): Promise<boolean | IUser | null | undefined> {
    return true
  }

  async get({ id }: any) {
    const found = await ArticleModel.findById(`${id}`).exec()
    if (!found) this.status(false).statusCode(NOTFOUND).message('Article not found').send()
    else this.status(true).statusCode(GET_SUCCESS).data('Article', found).send()
  }

  async all() {
    const Articles = await new PaginatingModel<IArticle>(ArticleModel, this).makePublic(true).exec()
    if (!Articles) this.status(false).statusCode(NOTFOUND).message('No Articles').send()
    else this.status(true).statusCode(GET_SUCCESS).data('Articles', Articles).send()
  }

  async create({ slug, content, title, coverImageUrl, seoDescription }: any) {
    const created = await ArticleModel.create({
      author: this.user._id,
      slug,
      content: !content ? content : sanitizeHTML(content),
      title,
      coverImageUrl,
      seoDescription,
    })
    if (!created) this.status(false).statusCode(BAD_REQUEST).message('Error creating Article').send()
    else this.status(true).statusCode(POST_SUCCESS).message('Article created').data('created', created).send()
  }

  async update({ id, author, slug, content, like, title, coverImageUrl, seoDescription, status }: any) {
    const definedValues = getDefinedValuesFrom({
      author,
      slug,
      content: !content ? content : sanitizeHTML(content),
      like,
      title,
      coverImageUrl,
      seoDescription,
      status,
    })
    const updated = await ArticleModel.findByIdAndUpdate(id, definedValues, {
      new: true,
    }).exec()
    if (!updated) this.status(false).statusCode(BAD_REQUEST).message('Article failed to update due to error').send()
    else this.status(true).statusCode(POST_SUCCESS).message('Article updated').data('update', updated).send()
  }

  async delete({ id }: any) {
    const deleted = await ArticleModel.findByIdAndDelete(id).exec()
    if (!deleted) this.status(false).statusCode(BAD_REQUEST).message('Article failed to be deleted do to error').send()
    else this.status(true).statusCode(POST_SUCCESS).message('Article deleted').data('deleted', deleted).send()
  }
}

export default Article
