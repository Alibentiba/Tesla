import React, { useState } from 'react'
// import './Section_home.css'
import Fade from 'react-reveal/Fade';
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import {useSelector} from 'react-redux'
import "./Section_home.css"
import { useDispatch } from 'react-redux'
import {menustate} from '../Redux/Slice'
const Section_home = ({title,descreption,leftbtntext,rightbtntext,bgimage}) => {
  const dispatch = useDispatch()
  const [closemenu,setclosemenu]=useState('false')
  const openmenu= useSelector(state=>state.counterstore.statemenu)
console.log('fdgjdsflkjgldkfsg:kj',openmenu)
  const close=()=>{
    const x=setclosemenu(!closemenu)
    dispatch(menustate(x))
  }


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
 <FaAngleDown className='bounce arrow'/>
</div>
{openmenu && 
 <Fade right>
<div className="sidbar-menu">
  <div className='sidbar-close-icon'>
    <AiOutlineClose className='close-icon' onClick={close}/>
  </div>
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
</div></Fade>
}




</div>
  )}

export default Section_home