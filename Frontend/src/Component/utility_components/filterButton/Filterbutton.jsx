import React from 'react'
import "./Filterbutton.css"

function Filterbutton({course_type}) {
  return (
    <>
    <button className='button'>{course_type}</button>
    </>
  )
}

export default Filterbutton