import React, { useState } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router'
import axios from 'axios'



function Login() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate()
  const handlesubmit = async (e)=>{
    e.preventDefault()
    try{
      const loginresponse= await axios.post("/learner/login",{
        email:email,
        password:password
    })
    localStorage.setItem("token",loginresponse.data.token);
    navigate("/learner")
    }catch(error){
      console.log(error);
    }
  }



  return (
    <>
      <div className="loginparentcontainer">
        <div className="loginformdiv">
          <form className='loginform' onSubmit={handlesubmit}>
            <input className='logininputcontainer Roboto' placeholder='email' type='email' name='email' required autoFocus onInput={(e) => e.target.value = e.target.value.replace(/[^a-zA-Z0-9@._%+-]/g, "")}
              onChange={(e) => {
                setemail(e.target.value)
              }}
            ></input>
            <input className='logininputcontainer Roboto' placeholder='password' type='password' name='password' required onChange={(e) => {
              setpassword(e.target.value)
            }}></input>
            <input type='submit' className='loginsubmitbutton Roboto'></input>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login