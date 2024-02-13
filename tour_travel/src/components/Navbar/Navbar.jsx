import React, { useState } from 'react'
// import { FaHome, FaUser, FaSearch } from 'react-icons/fa';
import { MenuItems } from './MenuItems';
import './NavbarStyle.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [state, setstate] = useState({ clicked: false });

  const handleClicked = () => {
    setstate({ clicked: !state.clicked });
  };


  return (
    <>
      <nav className='NavbarItems'>
        <h1 className='navbar-logo'>Travly</h1>

        {/* <ul className='nav-menu'>
          <li>
            <a href="/">
             <i className='fa-solid fa-house-user'></i>             
              <FaHome />  - commented line
               Home
            </a>
          </li>
        </ul> */}

        {/* hamberger for small screen */}

        <div className='menu-icons' onClick={handleClicked}>
          <i className={state.clicked ? 'fas fa-bars' : 'fas fa-times'}></i>
          {/* <i className='fas fa-times'></i> */}
        </div>

        {/* hamberger for small screen ends here */}

        {/* <ul className='nav-menu'> */}

        <ul className={state.clicked ? "nav-menu" : "nav-menu active"}>

          {MenuItems.map((item, index) => {
            return (<>
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            </>
            )
          })}
          <button>Sign Up</button>
        </ul>

      </nav>
    </>
  )
}

export default Navbar