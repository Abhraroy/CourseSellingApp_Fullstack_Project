import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose";
import LearnerRoutes from "./Routes/Learner.js"
// import InstructorRoutes from "./Routes/Instructor.js"


dotenv.config();
const PORT = process.env.PORT
const db_link = process.env.DB_URI


mongoose.connect(db_link+"/CourseSellingApp_v1").then(()=>{
    console.log("connected to database successfully");
    console.log(db_link+"/CourseSellingApp_v1");
})
const app = express()







app.get("/",(req,res)=>{
    res.send("Hey there")
})


app.use("/learner",LearnerRoutes)






















app.listen(PORT,()=>{
    console.log(`Your server is running on ${PORT}`);
    
})