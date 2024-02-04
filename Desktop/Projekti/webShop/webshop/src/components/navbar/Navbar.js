import React from 'react'

import './Navbar.css'

import { FiShoppingCart as ShopingCart } from "react-icons/fi";
import { NavLink, useNavigate } from 'react-router-dom';



const Navbar = ( { openModal } ) => {

  const navigate = useNavigate()

  return (
      <div className='navbarContainer'>
          <div className='firstNavbarContainer'>
              <h2 className='navbarLogo' onClick={() => navigate('/home')}>PHOLIX</h2>
              <ul className='navbarList'>
                <NavLink to='/home' className='navbarLinks'>Home</NavLink>
                <NavLink to='/shop' className='navbarLinks'>Shop</NavLink>
                <NavLink to='/aboutus' className='navbarLinks'>About Us</NavLink>
                <NavLink to='/blog' className='navbarLinks'>Blog</NavLink>
                <NavLink to='/contactus' className='navbarLinks'> Contact Us</NavLink>
              </ul>
          </div>
          <div className='secondNavbarContainer'>
              <ul className='navbarList'>
                <NavLink className='navbarLinks' onClick={openModal}>Login</NavLink>
              </ul>
              <ShopingCart size='25px' className='navbarIcon' onClick={() => navigate('/cart')}/>
          </div>
      </div>
  )
}

export default Navbar