import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose";
import LearnerRoutes from "./Routes/Learner.js"
// import InstructorRoutes from "./Routes/Instructor.js"
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config();
const PORT = process.env.PORT
const db_link = process.env.DB_URI
// Add this before your routes

mongoose.connect(db_link+"/CourseSellingApp_v1").then(()=>{
    console.log("connected to database successfully");
    console.log(db_link+"/CourseSellingApp_v1");
})
const app = express()
app.use(express.static(path.join(__dirname, 'build')));


app.use("/learner",LearnerRoutes)




app.get("/",(req,res)=>{
    res.send("Hey there")
})




















app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
  




app.listen(PORT,()=>{
    console.log(`Your server is running on ${PORT}`);
    
})