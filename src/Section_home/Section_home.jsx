import React from 'react'
// import './Section_home.css'
import Fade from 'react-reveal/Fade';
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
  <Fade bottom>
  <h1>{title}</h1>
  <p>{descreption}</p>
  </Fade>
</div>

<div className='section_button'>
<Fade bottom>
  <div className='section_2button'>
 <button className='order'>{leftbtntext}</button>
{rightbtntext && <button className='inventory'>{rightbtntext}</button>}




 </div>
 </Fade>
 <FaAngleDown className='arrow'/>
</div>

<div className='sidbar-menu'>
<li> Used Inventory</li>
<li>Trade-In</li>
<li>Test Drive</li>
<li>Insurance</li>
<li>Cybertruck</li>
<li>Roadster</li>
<li>Semi</li>
<li>Charging</li>
<li>Powerwall</li>
<li>Commercial Energy</li>
<li>Utilities</li>
<li>Find Us</li>
<li>Support</li>
<li>Investor Relations</li>

</div>




    </div>
  )
}

export default Section_home