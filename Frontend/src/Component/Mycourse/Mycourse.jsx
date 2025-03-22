import React, { useEffect, useState } from 'react'
import Coursecard from '../utility_components/course_card/course_card'
import "./Mycourse.css"
import axios from 'axios'
import { getUserIdFromToken } from '../utility_components/auth'

function Mycourse() {

  const [mycourse,setmycourse] = useState([])

  useEffect(()=>{
    const getcourse = async()=>{
      try{
        const token = localStorage.getItem('token');
        console.log(token);
        console.log(getUserIdFromToken(token))
        if(token){
        const response = await  axios.get("/learner/mycourse",{
          headers:{
            "Authorization":`Bearer ${token}`
          }
        })
        console.log("Full API Response:", response);
        console.log(response.data);
        
        setmycourse(response.data)
      }
      }catch(err){
        console.error('Error fetching courses:', err);
      }
    }
    getcourse()
  },[])





  return (
    <>
    <div className='mycoursecontainer'>
      {
        mycourse && mycourse.map((item,index)=>(
          <Coursecard key={index}/>
        ))
      }
    </div>
    </>
  )
}

export default Mycourse