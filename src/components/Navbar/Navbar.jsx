import './Navbar.css'

import logo from '../../assets/logo.png'

const Navbar = () => {
  return(
    <header className="nav-bar-container h-16 w-full flex flex-row justify-between p-1 backdrop-blur-sm text-white">
      <div className='flex justify-center items-center logo-container'>
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <div className='nav-menu-container'>
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">About us</a>
        <a href="#" className="nav-link">Domains</a>
        <a href="#" className="nav-link">Register</a>
        <a href="#" className="nav-link">Contact us</a>
      </div>
    </header>

  )
};


export default Navbar;