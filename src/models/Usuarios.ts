import { model, Schema } from "mongoose"

// Schema
const UserSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

export default model('Usuario', UserSchema);