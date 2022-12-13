const mongoose = require('mongoose');
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
});