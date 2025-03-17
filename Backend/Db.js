import mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId


const learner = new Schema({
    username:String,
    email:String,
    Password:String,
    PhoneNo:Number
})

const transaction = new Schema({
    user_id:ObjectId,
    course_name:String,
    course_id:String,
    Price:Number
},{timestamps:true})

const course = new Schema({
    course_name:String,
    cover_image:String,
    course_id:Number,
    course_type:String,
    Paid:Boolean,
    instructor_name:String,
    instructor_id:Number,
    price:Number,
    description:String,
    upvote:Number,
    downvote:Number,
    videos:[
        {
        video_link:String,
        Video_title:String
        }
    ]
})





export const Learnermodel = mongoose.model("Learner",learner,"Learner_1.0")
export const TransactionModel = mongoose.model("Transaction",transaction)
export const Course_Detail_Model = mongoose.model("course",course)