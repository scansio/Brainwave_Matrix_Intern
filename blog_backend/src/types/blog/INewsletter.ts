import ITimestamp from '../ITimestamp'

interface INewsletter extends ITimestamp {
  email: string
  interestTagIds: string[]
}

export default INewsletter
