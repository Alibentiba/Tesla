import React from 'react'
import "./Header.css"
import {VscMenu} from 'react-icons/vsc';

const Header = () => {
  return (
    <div className='Header'>
        <img src="images/logo.svg" alt="logo" />
<div className='menu'>
    <a className='menu-item'   href="">Model S</a>
    <a className='menu-item' href="">Model 3</a>
    <a className='menu-item' href="">Model X</a>
    <a className='menu-item' href="">Model Y</a>
    <a className='menu-item' href="">Solar Roof</a>
    <a className='menu-item' href="">Solar Panels</a>

</div>
<div className='right-menu'>
  <a className='menu-item' href="">Shop</a>
  <a className='menu-item' href="">Account</a>
 <VscMenu className='menu-icon'/>
</div>





    </div>
  )
}

export default Header