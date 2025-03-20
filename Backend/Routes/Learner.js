import express from "express";
import { Router } from "express";
import { Learnermodel, TransactionModel,Course_Detail_Model} from "../Db.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Hashing } from "../Utility/Hashing.js";
import { auth } from "../MIddleware/Auth.js";
dotenv.config();
const saltrounds = Number(process.env.SALT_ROUND);
console.log("salt", typeof saltrounds);
const router = Router();
router.use(express.json());
const JWT_SECRET = process.env.JWT_SECRET;








router.get("/",(req,res)=>{
  res.json("hy")
})








router.post("/signup", async (req, res) => {
  const { username, email, password, phoneno } = req.body;
  console.log(req.body, "req");

  const final_hashed_password = await Hashing(password, saltrounds);
  console.log(final_hashed_password);
  const userexists = await Learnermodel.exists({ email: email });
  if (userexists) {
    return res.status(409).json({ msg: "The email already exists!" });
  }
  try {
    const user = await Learnermodel.create({
      username: username,
      email: email,
      Password: final_hashed_password,
      PhoneNo: phoneno,
    });
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_SECRET
    );
    res
      .status(200)
      .json({ msg: "The Learner has been added to the database successfully",token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Internal server error" });
  }
});








router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      msg: "Email and Password both are needed",
    });
  }
  try {
    const founduser = await Learnermodel.findOne({
      email: email,
    });
    if (!founduser) {
      return res.status(401).json({
        msg: "Invalid credential",
      });
    }
    const MatchPassword = await bcrypt.compare(password, founduser.Password);
    if (MatchPassword) {
      const token = jwt.sign(
        {
          id: founduser._id,
        },
        JWT_SECRET
      );
      res.status(200).json({
        msg:"userlogged in",token,
      });
    } else {
      return res.status(401).json({
        msg: "Invalid credential",
      });
    }
  } catch (e) {
    res.status(401).json({
      msg: "Invalid credential",
    });
  }
});




router.get("/allcourses",async(req,res)=>{
    try{
        const allcourse = await Course_Detail_Model.find()
        res.status(200).json(allcourse)
    }catch(err){
        console.log(err);
        res.status(500).json({
            msg:"Internal server error"
        })
    }
})


















router.get("/mycourse", auth, async (req, res) => {
  const user_id = req.userid;
  let course_id_list = [];
  try {
    const temp = await TransactionModel.find({ user_id: user_id });

    if (temp) {
      temp.forEach((e) => {
        course_id_list.push(e.course_id);
      });
    }
    const courses = await Course_Detail_Model.find({ course_id: { $in: course_id_list } });
    console.log(courses);
    if(courses){
        res.status(200).json(courses)
    }else{
        res.status(500).json({msg:"Something went wrong"})
    }
  } catch(e){
    console.log(e);
    res.status(500).json({ msg: "Internal server error" });
  }
});




router.get("/course",auth,async(req,res)=>{
  const course_id = req.query.course_id
  try{
    const result = await Course_Detail_Model.findOne({course_id:course_id})
    res.status(200).json(result)
  }catch(err){
    res.status(500).json({
      msg:"Internal server error"
    })
  }
})









router.get("/buycourse",auth,async(req,res)=>{
  const course_id = req.query.course_id
  const user_id = req.user_id
  const already_bought = await TransactionModel.findOne({course_id:course_id,user_id:user_id})
  if(already_bought){
    return res.status(200).json({
      msg:"You have already bought this course"
    })
  }else{
    const result = await Course_Detail_Model.findOne({course_id:course_id})
    if(!result){
      res.status(500).json({
        msg:"Internal server error!"
      })
    }
    res.status(200).json(result)
  }
})




router.post("/confirmPurchase",auth,async(req,res)=>{
  const user_id = req.user_id
  const course_id = req.body.course_id
  const course_name = req.body.course_name
  const price = req.body.price


  try{
   await TransactionModel.create({
    user_id:user_id,
    course_name:course_name,
    course_id:course_id,
    Price:price
   })
   res.status(200).json({msg:"Course purchased!"})
  }catch(err){
    console.log();
    res.status(400).json({msg:"transaction failed"})
  }
})






export default router;
