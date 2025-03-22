import React, { useEffect, useState } from 'react'
import Coursecard from '../utility_components/course_card/course_card'
import axios from "axios"
import "./Allcourse.css"
import Search from '../utility_components/searchcomponent/Search'
import Filterbutton from '../utility_components/filterButton/Filterbutton'




function Allcourse() {
  const [coursedata, setcoursedata] = useState()
  const [courseType, setcoursetype] = useState([])
  useEffect(() => {
    const getallcourse = async()=>{
      try{
        const response = await axios.get("/learner/allcourses")
          console.log(response.data);
          setcoursedata(response.data)
      }catch(err){
        console.log(err);
      }
    }
    getallcourse()
  },[])

  useEffect(() => {
    console.log("Updated coursedata:", coursedata);
    if (coursedata && coursedata.length > 0) {
      const types = coursedata.map(element => element.course_type);
      setcoursetype(types);
    }
  }, [coursedata]);

  useEffect(() => {
    console.log("Updated coursetype:", courseType);
  }, [courseType]);



  return (
    <>
      <div className="parentcontainer">
        <Search />
        <div className='Filtercontainer'>
          {
            courseType.map((course_type, index) => {
              return <Filterbutton key={index} course_type={course_type} />
            })
          }
        </div>
        <div className="courseDisplaydiv">
          {
            coursedata ? (
              coursedata.map(({ course_name, course_id, cover_image, Paid, upvote, downvote, price, description, instructor_name }, index) => {
                return <Coursecard key={course_id} course_name={course_name} cover_image={cover_image} Paid={Paid} upvote={upvote} downvote={downvote} price={price} description={description} instructor_name={instructor_name} />
              })
            ) : <p>Loading courses</p>
          }
        </div>
      </div>
    </>
  )
}

export default Allcourse