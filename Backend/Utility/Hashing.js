import bcrypt from "bcrypt"


export const Hashing = async (pass,salt)=>{
    try{
        if (!pass) throw new Error("Password is required for hashing!");
        if (!salt) throw new Error("Salt rounds are missing!");
        return  await bcrypt.hash(pass,salt);
    }catch(err){
        console.log("From hashing err");
        throw err;
    }
}