import React from 'react'
import "./course_card.css"
import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";
import { useNavigate } from 'react-router';
function Coursecard({course_name,cover_image,Paid,upvote,downvote,price,description,instructor_name}) {

  const navigate = useNavigate()



  return (
    <div className="parentContainer">
        <div className="thumbnail">
          <img className='thumbnailImg' src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=" alt='he' />
        </div>
        <div className="courseDetail">
            <span className="coursename Roboto">{course_name}</span>
            <span className="descrption Roboto">{description}</span>
            <span className="instructorname Roboto">{instructor_name}</span>
            
            <div className="pricediv">
                <div className="price Roboto">PRICE:{price}</div>
                <div className="typediv Roboto">Free</div>
                <button className='buyButton Roboto' onClick={()=>navigate(`/Learner/buycourse`)}>Buy</button>
            </div>
        </div>
        <div className="rating Roboto">
                <span className='vote'><BiSolidUpvote/>678</span>
                <span className='vote'><BiSolidDownvote/>789</span>
            </div>
    </div>
  )
}

export default Coursecard