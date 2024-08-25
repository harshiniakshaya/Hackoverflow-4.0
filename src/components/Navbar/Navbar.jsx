import './Navbar.css'

import logo from '../../assets/logo.png'
import { useState } from 'react';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return(
    <header className="nav-bar-container h-16 w-full flex flex-row justify-between p-1 backdrop-blur-sm text-white">
      <div className='flex justify-center items-center logo-container'>
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <div className='nav-menu-container'>
        <button className={`ham-icon ${isNavOpen? 'active': ''}`} onClick={() => setIsNavOpen(prev => !prev)}>
          <svg class="ham-bar absolute" xmlns="http://www.w3.org/2000/svg" width="24" height="4" fill="none" data-v-05b4900b="">
            <path fill="currentColor" d="M.162.649A.5.5 0 0 1 .668.028l22.668.944a.5.5 0 0 1 .454.658l-.676 2.028A.5.5 0 0 1 22.64 4H1.39a.5.5 0 0 1-.485-.379L.162.65Z" data-v-05b4900b=""></path>
          </svg>
          <svg class="ham-bar absolute" xmlns="http://www.w3.org/2000/svg" width="24" height="4" fill="none" data-v-05b4900b="">
            <path fill="currentColor" d="M.162.649A.5.5 0 0 1 .668.028l22.668.944a.5.5 0 0 1 .454.658l-.676 2.028A.5.5 0 0 1 22.64 4H1.39a.5.5 0 0 1-.485-.379L.162.65Z" data-v-05b4900b=""></path>
          </svg>
        </button>
        <div className={`menu-container ${isNavOpen? 'active': ''}`}>
          <a href="#hero-section" className="nav-link">Home</a>
          <a href="#about-section" className="nav-link">About us</a>
          <a href="#domain-section" className="nav-link">Domains</a>
          <a href="#" className="nav-link">Register</a>
          <a href="#" className="nav-link">Contact us</a>
        </div>
      </div>
    </header>

  )
};


export default Navbar;