/* eslint-disable @typescript-eslint/no-explicit-any */
import { Express, NextFunction, Request, Response } from 'express'
import AllError from '../../exceptions/base/AllError'
import BaseInitFunction from './BaseInitFunction'
import IData from '../../types/IData'
import IConnectInfo from '../../types/IConnectInfo'
import IResStruct from '../../types/IResStruct'
import IRequestMethods from './IRequestMethod'
import IUser from '../../types/IUser'
import { BAD_REQUEST, POST_SUCCESS, SERVER_ERROR } from '../../configs/statusCodeConstants'
import CronJob from '../../cronjobs/base/CronJob'
import Routing from '../../miscs/Routing'
import { AuthenticationLevel } from '../../configs/constants'

class Sender implements BaseInitFunction, IRequestMethods {
  private app!: Express
  private _req!: Request
  public directRequest = false
  private _cronJobAccess = false

  public get cronJobAccess() {
    return this._cronJobAccess
  }

  public set cronJobAccess(value) {}

  public setCronJobAccess(accessor: CronJob, accessing: boolean) {
    if (accessor instanceof CronJob) {
      this._cronJobAccess = !!accessing
    }
  }

  private _clientData!: { [key: string]: any }
  public get clientData(): { [key: string]: any } {
    return this._clientData
  }
  protected set clientData(value: { [key: string]: any }) {
    this._clientData = value
  }
  public get req(): Request {
    return this._req
  }
  private _res!: Response
  public get res(): Response {
    return this._res
  }
  private _next!: NextFunction
  public get next(): NextFunction {
    return this._next
  }
  public user!: IUser
  private _data!: IData
  private _privateRoute?: AuthenticationLevel

  public get isPrivateRoute(): AuthenticationLevel | undefined {
    return this._privateRoute
  }

  protected set isPrivateRoute(value: AuthenticationLevel) {}

  public setIsPrivateRoute(setter: Routing, value?: AuthenticationLevel) {
    if (setter instanceof Routing) {
      this._privateRoute = value
    }
  }

  private _connection!: IConnectInfo
  private notImplementedError!: AllError
  protected executingClassName!: string

  constructor(req: Request, res: Response, next: NextFunction) {
    if (res && req && next) {
      this._req = req
      this._res = res
      this._next = next
      this.user = (this.req as any).user
      const uid = this.user?._id
      const connection: IConnectInfo | any = {
        endpoint: this.req.url,
        statusCode: BAD_REQUEST,
      }
      uid && (connection.uid = `${uid}`)
      const data: IData = {
        status: false,
        message: 'Error',
      }
      this._connection = connection
      this._data = data
      this.notImplementedError = new AllError('Method not implemented.')
      this.notImplementedError.status = SERVER_ERROR
    }
  }

  initConstruct(): Promise<any> {
    throw this.notImplementedError
  }

  async init(): Promise<boolean | IUser | null | undefined> {
    return true
  }

  data(): IData
  data(key: string, value: any): this
  data(key?: string, value?: any): this | IData {
    if (!key) {
      return this._data
    }
    this._data[key] = value
    return this
  }

  connection(): IConnectInfo
  connection(key: string, value: any): this
  connection(key?: string, value?: any) {
    if (!key) {
      return this._connection
    }
    ;(<any>this._connection)[key] = value
    return this
  }

  status(value: boolean) {
    this._data.status = value
    return this
  }

  error(message: string | null = null) {
    this.status(false)
    message && this.message(message)
    return this
  }

  success(message: string | null = null) {
    this.status(true)
    message && this.message(message)
    return this
  }

  message(value: string) {
    this._data.message = value
    return this
  }

  endpoint(value: string) {
    this._connection.endpoint = value
    return this
  }

  statusCode(value: number) {
    this._connection.statusCode = value
    return this
  }

  errorCode(value: number) {
    this._connection.errorCode = value
    return this
  }

  uid(value: number) {
    this._connection.uid = value
    return this
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async get(data: any): Promise<any> {
    this.next(this.notImplementedError)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(data: any): Promise<any> {
    this.next(this.notImplementedError)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(data: any): Promise<any> {
    this.next(this.notImplementedError)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async delete(data: any): Promise<any> {
    this.next(this.notImplementedError)
  }

  setExecutingClassName(econtroller: string) {
    this.executingClassName = econtroller
  }

  send() {
    if (this.directRequest) {
      if (this._data.status && this._connection.statusCode == BAD_REQUEST) {
        this._connection.statusCode = POST_SUCCESS
      }
      if (this._data.status && (this._data.message === 'Error' || this._data.message === '')) {
        this._data.message = 'Success'
      }
      const resData: IResStruct = {
        connection: this._connection,
        data: this._data,
      }
      const sendSignal = new AllError()
      sendSignal.sendSignal = resData
      throw sendSignal
    }
  }
}

export default Sender
