import React from 'react'
// import './Section_home.css'
// FaAngleDown
import { FaAngleDown } from "react-icons/fa";

import "./Section_home.css"
const Section_home = () => {
  return (
    <div className='Section_home' style={{
      backgroundImage:`url('images/model-3.jpg')` ,
      width: "100%",
      height: "98vh",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}>

<div className='section_text'>
  <h1>Model S</h1>
  <p>Order Online for Touchless Delivery</p>
</div>
<div className='section_button'>
 <button className='order'>CUSTOM ORDER</button>
 <button className='inventory'>EXISTING INVENTORY</button>
 <FaAngleDown className='arrow'/>
</div>





    </div>
  )
}

export default Section_home