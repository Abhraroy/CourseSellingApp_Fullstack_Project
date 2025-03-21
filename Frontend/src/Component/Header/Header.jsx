import React from 'react'
import "./Header.css"
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router';
function Header() {

  const navigate = useNavigate()


  return (
    <>
    <div className="headercontainer">
      <div className="headerlogo"></div>
      <div className="navmenu">
        <input type="text" className="searchbar" placeholder='Search for anything '/>
        <button className="navoption Roboto" onClick={()=>navigate("/learner")}>Home</button>
        <button className="navoption Roboto" onClick={()=>navigate("/learner/allcourse")}>All Courses</button>
        <button className="navoption Roboto" onClick={()=>navigate("/learner/mycourse")}>My courses</button>
        <button className="navoption Roboto">About</button>
       <CgProfile className='CgProfile' />
      </div>
    </div>
    </>
  )
}

export default Header