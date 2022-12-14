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

UserSchema.methods.getSignedJwtToken = (name: string) => {
  return jwt.sign(
    { id: name },
    'my_secret',
    { expiresIn: '1h' }
  );
}
