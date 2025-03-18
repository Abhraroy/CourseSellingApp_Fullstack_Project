import React from 'react'
import "./course_card.css"
import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";
function Coursecard() {
  return (
    <div className="parentContainer">
        <div className="thumbnail"></div>
        <div className="courseDetail">
            <span className="coursename">course</span>
            <span className="descrption">desc</span>
            <span className="instructorname">Instructor</span>
            <div className="rating">
                <span className='vote'> <BiSolidUpvote/> 678</span>
                <span className='vote'><BiSolidDownvote /> 789</span>
            </div>
            <div className="pricediv">
                <div className="price">PRICE</div>67
            </div>
        </div>
    </div>
  )
}

export default Coursecard