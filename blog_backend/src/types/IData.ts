export default interface IData {
  status: boolean
  message: string
  [key: string | number]: unknown
}
