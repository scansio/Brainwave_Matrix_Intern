/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { getDefinedValuesFrom } from '../../common'
import { GET_SUCCESS, BAD_REQUEST, POST_SUCCESS, NOTFOUND } from '../../configs/statusCodeConstants'
import TagModel from '../../models/blog/TagModel'
import PaginatingModel from '../../models/PaginatingModel'
import ITag from '../../types/blog/ITag'
import IUser from '../../types/IUser'
import BaseController from '../base/BaseController'

class Tag extends BaseController {
  constructor(req: Request, res: Response, next: NextFunction) {
    super(req, res, next)
  }

  async init(): Promise<boolean | IUser | null | undefined> {
    return true
  }

  async get({ id }: any) {
    const found = await TagModel.findById(`${id}`).exec()
    if (!found) this.status(false).statusCode(NOTFOUND).message('Tag not found').send()
    else this.status(true).statusCode(GET_SUCCESS).data('Tag', found).send()
  }

  async all() {
    const Tags = await new PaginatingModel<ITag>(TagModel, this).makePublic(true).exec()
    if (!Tags) this.status(false).statusCode(NOTFOUND).message('No Tags').send()
    else this.status(true).statusCode(GET_SUCCESS).data('Tags', Tags).send()
  }

  async create({ name }: any) {
    const created = await TagModel.create({
      name,
    })
    if (!created) this.status(false).statusCode(BAD_REQUEST).message('Error creating Tag').send()
    else this.status(true).statusCode(POST_SUCCESS).message('Tag created').data('created', created).send()
  }

  async update({ id, name, status }: any) {
    const definedValues = getDefinedValuesFrom({
      name,
      status,
    })
    const updated = await TagModel.findByIdAndUpdate(id, definedValues, {
      new: true,
    }).exec()
    if (!updated) this.status(false).statusCode(BAD_REQUEST).message('Tag failed to update due to error').send()
    else this.status(true).statusCode(POST_SUCCESS).message('Tag updated').data('update', updated).send()
  }

  async delete({ id }: any) {
    const deleted = await TagModel.findByIdAndDelete(id).exec()
    if (!deleted) this.status(false).statusCode(BAD_REQUEST).message('Tag failed to be deleted do to error').send()
    else this.status(true).statusCode(POST_SUCCESS).message('Tag deleted').data('deleted', deleted).send()
  }
}

export default Tag
