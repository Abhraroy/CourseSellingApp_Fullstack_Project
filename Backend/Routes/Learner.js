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
    await Learnermodel.create({
      username: username,
      email: email,
      Password: final_hashed_password,
      PhoneNo: phoneno,
    });
    res
      .status(200)
      .json({ msg: "The Learner has been added to the database successfully" });
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
        msg: token,
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
    if(courses){
        res.status(200).json({
            msg:"Couse details are now availiable"
        })
    }
    console.log(results);
  } catch(e){
    console.log(e);
    res.status(500).json({ msg: "Internal server error" });
  }
});

export default router;
