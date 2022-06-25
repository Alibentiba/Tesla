import React from 'react'
// import './Section_home.css'
// FaAngleDown
import { FaAngleDown } from "react-icons/fa";
// 'images/model-3.jpg'
import "./Section_home.css"
const Section_home = ({title,descreption,leftbtntext,rightbtntext,bgimage}) => {
  return (
    <div className='Section_home' style={{
      backgroundImage:`url(${bgimage})` ,
      width: "100%",
      height: "98vh",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}>

<div className='section_text'>
  <h1>{title}</h1>
  <p>{descreption}</p>
</div>

<div className='section_button'>
  <div className='section_2button'>
 <button className='order'>{leftbtntext}</button>
{rightbtntext && <button className='inventory'>{rightbtntext}</button>}



 </div>
 <FaAngleDown className='arrow'/>
</div>





    </div>
  )
}

export default Section_home