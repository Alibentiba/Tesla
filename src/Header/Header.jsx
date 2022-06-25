import React from 'react'
import "./Header.css"
import {VscMenu} from 'react-icons/vsc';
import {menustate} from '../Redux/Slice'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()
  const openmenu= useSelector(state=>state.counterstore.statemenu)



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
 <VscMenu className='menu-icon' onClick={() => dispatch(menustate(!openmenu))}/>
</div>





    </div>
  )
}

export default Header