import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose";
import LearnerRoutes from "./Routes/Learner.js"
// import InstructorRoutes from "./Routes/Instructor.js"


dotenv.config();
const PORT = process.env.PORT
const db_link = process.env.DB_URI


mongoose.connect(db_link).then(()=>{
    console.log("connected to database successfully");
})
const app = express()







app.get("/",(req,res)=>{
    res.send("Hey there")
})


app.use("/Learner",LearnerRoutes)






















app.listen(PORT,()=>{
    console.log(`Your server is running on ${PORT}`);
    
})