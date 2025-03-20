import React from 'react'
import "./Greet.css"
import { useNavigate } from 'react-router'
function Greet() {
    const navigate = useNavigate()
  return (
    <>
    <div className="Greetparentcontainer">
        <p className='Greet Roboto'>Hi There , are you a</p>
        <div className="usercategoryContainer">
            <div className="usercategorysquare">
                <div className="imgcontainer">
                    <img className='student img' src="https://static.vecteezy.com/system/resources/thumbnails/007/469/004/small/graduated-student-in-simple-flat-personal-profile-icon-or-symbol-people-concept-illustration-vector.jpg" alt="Loading..."></img>
                </div>
                <span className='student Roboto'>Student</span>
                <div className="buttonContainer">
                    <button className="greetbutton register" onClick={()=>navigate('/Learner/signup')}>Register</button>
                    <button className="greetbutton login" onClick={()=>navigate('/Learner/login')}>Login</button>
                </div>
            </div>
            <div className="usercategorysquare">
                <div className="imgcontainer">
                    <img className='instructor img' src="https://www.shutterstock.com/image-vector/man-explaining-pointer-600nw-2131257207.jpg" alt="Loading..."></img>
                </div>
                <span className='instructor Roboto'>Instructor</span>
                <div className="buttonContainer">
                    <button className="greetbutton register">Register</button>
                    <button className="greetbutton login">Login</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Greet