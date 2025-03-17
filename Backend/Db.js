import mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId


const learner = new Schema({
    username:String,
    email:String,
    Password:String,
    PhoneNo:Number
})









export const Learnermodel = mongoose.model("Learner",learner,"Learner_1.0")
