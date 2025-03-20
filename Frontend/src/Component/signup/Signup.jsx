import React, { useState } from 'react'
import "./Signup.css"
import axios from 'axios'
import { useNavigate } from 'react-router'
function Signup() {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [phoneno, setphoneno] = useState("")
    const [errordetection,seterrordetection] = useState("")
    const navigate = useNavigate()
    const handlesubmit = async(e) => {
        e.preventDefault()
        console.log(username,email,password,phoneno);
        try{
        const response = await axios.post("/learner/signup",{
            username:username,
            email:email,
            password,password,
            phoneno:phoneno
        });
        const signuptoken=response.data.token
        if(signuptoken){
            const loginresponse= await axios.post("/learner/login",{
                email:email,
                password:password
            })
            localStorage.setItem("token",loginresponse.data.token)
        }else{
            console.log("signup failed");
        }
        console.log(response.data.msg);
        navigate('/learner')
        }catch(error){
            if (error.response) {
                console.error("Error:", error.response.status, error.response.data);
                if (error.response.status === 409) {
                    return seterrordetection("User already exists! Try a different email.");
                } else {
                    return seterrordetection("Signup failed! Please try again.");
                }
            } else {
                return seterrordetection("Network error");
            }

        }
    }

    return (
        <>
            <div className="signupparentcontainer">
                <div className="formcontainer">
                    
                    <form className='registerform' onSubmit={handlesubmit}>
                        {seterrordetection?<span>{errordetection}</span>:""}
                        <input className='inputcontainer' placeholder='username' type='text' name='username' required autoFocus onInput={(e) => e.target.value = e.target.value.replace(/[^A-Za-z0-9]/g, "")}
                            onChange={(e) => {
                                setusername(e.target.value)
                            }}
                        ></input>
                        <input className='inputcontainer' placeholder='email' type='email' name='email'  required onInput={(e) => e.target.value = e.target.value.replace(/[^a-zA-Z0-9@._%+-]/g, "")}
                        onChange={(e)=>{
                            setemail(e.target.value)
                        }}
                        ></input>
                        <input className='inputcontainer' placeholder='password' type='password' name='password' required onChange={(e)=>{
                            setpassword(e.target.value)
                        }}></input>
                        <input className='inputcontainer' placeholder='phone no' type='text' name='phone' maxLength={10} required onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} onChange={(e)=>{
                            setphoneno(e.target.value)
                        }}></input>
                        <input type='submit' className='submitbutton' ></input>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup