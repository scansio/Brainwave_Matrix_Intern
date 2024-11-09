/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { calculateReadingTimeInMinute, getDefinedValuesFrom, sanitizeHTML } from '../../common'
import { GET_SUCCESS, BAD_REQUEST, POST_SUCCESS, NOTFOUND } from '../../configs/statusCodeConstants'
import ArticleModel from '../../models/blog/ArticleModel'
import PaginatingModel from '../../models/PaginatingModel'
import IArticle from '../../types/blog/IArticle'
import IUser from '../../types/IUser'
import BaseController from '../base/BaseController'
import NotFoundException from '../../exceptions/NotFoundException'
import FileStore from '../../miscs/FileStore'

class Article extends BaseController {
  constructor(req: Request, res: Response, next: NextFunction) {
    super(req, res, next)
  }

  async init(): Promise<boolean | IUser | null | undefined> {
    return true
  }

  async like({ id }: any) {
    await super.like({ model: ArticleModel, id })
  }

  async get({ id }: any) {
    const found = await ArticleModel.findById(`${id}`).exec()
    if (!found) this.status(false).statusCode(NOTFOUND).message('Article not found').send()
    else this.status(true).statusCode(GET_SUCCESS).data('Article', found).send()
  }

  async slug({ slug }: any) {
    const found = await ArticleModel.findOne({ slug }).populate('author').exec()
    if (!found) this.status(false).statusCode(NOTFOUND).message('Article not found').send()
    else this.status(true).statusCode(GET_SUCCESS).data('Article', found).send()
  }

  async all() {
    const Articles = await new PaginatingModel<IArticle>(ArticleModel, this).makePublic(true).exec()
    if (!Articles) this.status(false).statusCode(NOTFOUND).message('No Articles').send()
    else this.status(true).statusCode(GET_SUCCESS).data('Articles', Articles).send()
  }

  async create() {
    let coverImageUrl = ''
    if (this.req.headers['content-type']?.includes('multipart')) {
      const filestore = new FileStore(this, true)
      coverImageUrl = ((await filestore.uploadFor('coverImage')) as string) || ''
    }

    const { author, slug, content, title, tags, seoDescription, published } = this.req.body || {}

    const creationData = {
      author: (author && (await this.adminAccess(false)) && author) || this.user._id,
      slug,
      content: content && sanitizeHTML(content),
      title,
      coverImageUrl,
      tags,
      seoDescription,
      published,
      readingTimeInMinute: content && calculateReadingTimeInMinute(content),
    }

    const created = await ArticleModel.create(creationData)
    if (!created) this.status(false).statusCode(BAD_REQUEST).message('Error creating Article').send()
    else this.status(true).statusCode(POST_SUCCESS).message('Article created').data('created', created).send()
  }

  async read({ articleId, readingTimeInMinute, readToend, minuteSpend, readBy }: any) {
    const article = await ArticleModel.findById(articleId).exec()

    if (!article) {
      throw new NotFoundException(this)
    }

    readBy && (await this.isValidUser(readBy))

    if (readBy && readBy == article.author) {
      return this.status(true).statusCode(GET_SUCCESS).message('Article author cannot submit ArticleReadForm').send()
    }

    if (!readingTimeInMinute || !readToend || !minuteSpend) {
      return this.status(false).statusCode(BAD_REQUEST).message('Invalid request').send()
    }

    if (readingTimeInMinute < minuteSpend || readingTimeInMinute < article.readingTimeInMinute - 1) {
      return this.status(false).statusCode(BAD_REQUEST).message('Invalid request').send()
    }

    article.readers.push(readBy || 0)

    const update = await article.save()

    this.status(true).statusCode(POST_SUCCESS).message('Article updated').data('update', update).send()
  }

  async update() {
    let coverImageUrl
    if (this.req.headers['content-type']?.includes('multipart')) {
      const filestore = new FileStore(this, true)
      coverImageUrl = ((await filestore.uploadFor('coverImage')) as string) || ''
    }

    const { id, author, slug, content, title, tags, seoDescription, published, likeByIds, numComments, status } =
      this.req.body || {}

    const definedValues = getDefinedValuesFrom({
      author: (author && (await this.adminAccess(false)) && author) || this.user._id,
      slug,
      content: content && sanitizeHTML(content),
      likeByIds,
      title,
      coverImageUrl,
      tags,
      seoDescription,
      published,
      numComments,
      readingTimeInMinute: content && calculateReadingTimeInMinute(content),
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
