import mongoose, { Schema } from 'mongoose'
import IUser from '../types/IUser'
import { AuthenticationLevel, INACTIVE, UserType } from '../configs/constants'
import md5 from '../libs/md5'
import TimestampsPlugin from './plugins/TimestampsPlugin'

export const UserSchema = new Schema<IUser>({
  _id: {
    type: Number,
    required: [true, 'Generate ID for User'],
  },
  refID: {
    type: Number,
    ref: 'User',
  },
  firstname: {
    type: String,
    required: [true, 'First name is required'],
  },
  lastname: {
    type: String,
    required: [true, 'Last name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email address is required'],
    trim: true,
    lowercase: true,
    email: true,
    unique: true,
    index: true,
    /* validate: {
      validator: async (email: string) => {
        const existed = await UserModel.findOne({ email }).exec();
        if (existed) {
          return false;
        }
        return true;
      },
      message: "User Already Exist",
    }, */
  },
  password: {
    type: String,
    trim: true,
    //required: [true, "Password is required"],
    set: (password: string) => password && md5(`${password}`),
  },
  pin: {
    type: String,
    set: (pin: number) => pin && md5(`${pin}`),
  },
  status: {
    type: Number,
    default: INACTIVE,
  },

  oauth: Boolean,

  yesterdayNumberOfTrade: Number,
  yesterdayProfit: Number,
  yesterdayTradePercentage: Number,

  todayNumberOfTrade: Number,
  todayProfit: Number,
  todayTradePercentage: Number,

  currentMonthProfit: Number,
  currentMonthNumberOfTrade: Number,
  currentMonthTradePercentage: Number,

  lastMonthProfit: Number,
  lastMonthNumberOfTrade: Number,
  lastMonthTradePercentage: Number,

  energy: Number,
  role: {
    type: String,
    enum: AuthenticationLevel,
    default: AuthenticationLevel.END_USER,
  },
  type: {
    type: String,
    enum: UserType,
    default: UserType.PASSENGER,
  },
  dob: Date,
  phone: { type: Number, minLength: 7, maxLength: 10, required: true },
})

const UserModel = mongoose.model<IUser>('User', TimestampsPlugin(UserSchema))
export default UserModel
