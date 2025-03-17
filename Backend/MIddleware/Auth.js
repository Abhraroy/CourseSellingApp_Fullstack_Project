import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET

export const auth = (req,res,next)=>{
    const token = req.headers.token
    const decoded = jwt.verify(token,JWT_SECRET)
    if(decoded){
    req.user_id = decoded.id
    next()
    }else{
        res.status(403).json({
            msg:"Not authorized"
        })
    }
}