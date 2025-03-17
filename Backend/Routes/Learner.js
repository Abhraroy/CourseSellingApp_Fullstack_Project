import express from "express"
import { Router } from "express"
import { Learnermodel } from "../Db"
import bcrypt from "bcrypt"
import { Hashing } from "../Utility/Hashing"

const saltrounds = process.env.SALT_ROUND

const router = Router()
router.use(express.json())








router.post("/signup",async(req,res)=>{
    const {username,email,password,phoneno} = req.body
    const final_hashed_password = Hashing(password,saltrounds)
    const userexists = await Learnermodel.exists({email:email})
    if(userexists){
        return res.status(409).json({msg:"The email already exists!"})
    }
    try{
        await Learnermodel.create({
            username:username,
            email:email,
            Password:final_hashed_password,
            PhoneNo:phoneno
        })
        res.status(200).json({msg:"The Learner has been added to the database successfully"})
    }catch(err){
        console.log(err);
        res.status(500).json({msg:"Internal server error"})
    }

})
































export default router;