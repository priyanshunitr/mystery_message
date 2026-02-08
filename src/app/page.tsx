// import { Schema } from "mongoose";
import mongoose, {Schema,Document} from "mongoose";

export interface Message extends Document {
  content : string;
  createdat : Date;
}

const MessageSchema: Schema = new Schema({
  content : {
    type : String,
    required : true
  },
  createdat : {
    type : Date,
    default : Date.now
  }
})

export interface User extends Document {
  username : string;
  email : string;
  password : string;
  verifyCode : string;
  verifiedCodeExpiry : Date;
  isAcceptingMessages : boolean;
  message : Message[];
}

const UserSchema: Schema = new Schema({
  username : {
    type : String,
    required : true,
    unique : true
  },
  email : {
    type : String,
    required : true,
    unique : true
  },
  password : {
    type : String,
    required : true
  },
  verifyCode : {
    type : String,
    required : true
  },
  verifiedCodeExpiry : {
    type : Date,
    required : true
  },
  isAcceptingMessages : {
    type : Boolean,
    default : true
  },
  message : [MessageSchema]
})

const UserModel = mongoose.models.User || mongoose.model<User>('User',UserSchema);
export default UserModel;