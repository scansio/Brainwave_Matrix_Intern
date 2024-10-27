import multer from 'multer'
import BaseController from '../controllers/base/BaseController'
import path from 'path'
import { rand } from '../libs/md5'
import fs from 'fs'
import IUser from '../types/IUser'

class FileStore {
  private isPublic: boolean
  private storage
  private upload
  private controller: BaseController
  private publicDir = `../../file_store/public`
  private privateDir = `../../file_store/private/user`
  private activeDir

  constructor(controller: BaseController, isPublic = false, user?: IUser['_id']) {
    this.isPublic = isPublic
    this.controller = controller
    this.privateDir = path.resolve(`${__dirname}/${this.privateDir}/${user ? user : this.controller.user._id}`)
    this.publicDir = path.resolve(`${__dirname}/${this.publicDir}`)
    fs.mkdirSync(this.privateDir, { recursive: true })
    this.activeDir = this.isPublic ? this.publicDir : this.privateDir
    this.storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, this.activeDir)
      },
      filename: (req, file, cb) => {
        cb(null, `${rand(12345, 678910)}.${file.mimetype.split('/')[1]}`)
      },
    })
    this.upload = multer({
      storage: this.storage,
      fileFilter: (req, file, cb) => {
        const allowedFileTypes = ['image/jpeg', 'image/png']
        if (allowedFileTypes.includes(file.mimetype)) {
          cb(null, true)
        } else {
          cb(new Error('Invalid file type. (jpeg or png only)'))
        }
      },
    })
  }

  public uploadFor(filename: string): Promise<boolean | string> {
    return new Promise((resolve, reject) => {
      this.upload.single(filename)(this.controller.req, this.controller.res, (error) => {
        if (error) {
          return reject(error)
        }
        const file = this.controller.req.file
        if (!file) {
          return reject(false)
        } else {
          return resolve(file.filename)
        }
      })
    })
  }

  public uploadForMultiple(filename: string, maxCount: number = 10): Promise<boolean | string[]> {
    return new Promise((resolve, reject) => {
      this.upload.array(filename, maxCount)(
        // Use array for multiple files
        this.controller.req,
        this.controller.res,
        (error) => {
          if (error) {
            return reject(error)
          }
          const files = this.controller.req.files
          if (!files || files.length === 0) {
            return reject(false)
          } else {
            const filenames = (files as Express.Multer.File[]).map((file: Express.Multer.File) => file.filename)
            return resolve(filenames)
          }
        },
      )
    })
  }

  delete(filename: string) {
    const f = `${this.activeDir}/${filename}`
    try {
      fs.rmSync(f)
    } catch (error) {
      /* empty */
    }
  }
}

export default FileStore
