import { Mongoose } from "mongoose";
import { UserType } from "../types/UserType";
import { UserSchema } from "./Schemas/Schema";

require('dotenv').config();

const mongoose: Mongoose = require('mongoose');
const Schema = mongoose.Schema;
const env = process.env;

mongoose.set('strictQuery', false);

mongoose.connect(
  `mongodb://${env.EXPRESS_APP_MONGO_USER_NAME}:${env.EXPRESS_APP_MONGO_USER_PASSWORD}@mongo:${env.EXPRESS_APP_MONGO_DB_PORT}/${env.EXPRESS_APP_MONGO_DB_NAME}?authSource=admin`
)

const User = mongoose.model('users', UserSchema);

export const getLoginUser = async(): Promise<UserType[]> => {
  return await User.find();
}
