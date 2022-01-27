import React, { useState } from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import useAuth from '../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isShow, setIsShow] = useState(false)
  const { user, singOutUser } = useAuth()
  return (
    <div className='header'>
      <div className="navbar custom-container">
        <div className="logo">
          <h1>Sun<span>Tour</span></h1>
        </div>
        <nav>
          <ul className={!isShow ? "menu" : 'menu show'}>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <HashLink to='/home#services'>Posts</HashLink>
            </li>
            
            <li>
              <HashLink to='/home#contact'>Contact</HashLink>
            </li>
            <li>
              <NavLink to='/dashboard'>Dashboard</NavLink>
            </li>
          </ul>
          {
            !user.email ? <ul className='login-regi'>
              <li>
                <NavLink to='/login'>Login</NavLink>
              </li>
              <li>
                <NavLink to='/register'>Register</NavLink>
              </li>
            </ul> : <div className='user-info'>
              <button onClick={singOutUser}>Sign Out</button>
              <h1>{user.displayName?.split(' ')[0]}</h1>
            </div>
          }
        </nav>
        <div onClick={() => setIsShow(!isShow)} className="hambarger">
          <FaBars />
        </div>
      </div>
    </div>
  );
};

export default Navbar;