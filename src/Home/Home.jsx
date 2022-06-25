import React from 'react'
import './Home.css'
import Section_home from '../Section_home/Section_home'
const Home = () => {
  return (
    <div className='Home'>
        <Section_home title="Model S" descreption="Order Online for Touchless Delivery" leftbtntext="USTOM ORDER"
        rightbtntext="EXISTING INVENTORY" bgimage='images/model-3.jpg'/>

             <Section_home title="Model S" descreption="Order Online for Touchless Delivery" leftbtntext="USTOM ORDER"
         bgimage='images/model-3.jpg'/>
        
        </div>
  )
}

export default Home