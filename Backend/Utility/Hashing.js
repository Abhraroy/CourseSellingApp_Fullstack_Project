import bcrypt from "bcrypt"


export const Hashing = async (pass,salt)=>{
    try{
        const HashedPass = await bcrypt.hash(pass,salt);
    }catch(err){
        console.log(err);
    }
}