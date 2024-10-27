import ITimestamp from "../ITimestamp"
import ITag from "./ITag"

interface INewsletter extends ITimestamp {
  email: string
  interestTagIds: ITag['_id'][]
}

export default INewsletter
