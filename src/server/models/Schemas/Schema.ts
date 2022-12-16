import { UserType } from "../../types/UserType";

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  _id: Number,
  name: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    unique: true
  }
}, {
  versionKey: false
},);

UserSchema.methods.getSignedJwtToken = (user: UserType) => {
  return jwt.sign(
    { user: user },
    'my_secret',
    { expiresIn: '1h' }
  );
}
