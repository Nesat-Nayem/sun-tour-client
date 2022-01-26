import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import "./AppBar.css";
const AppBar = () => {
   const {user,singOutUser} = useAuth()
  return (
    <div>
     <nav>
         <div className="logo">
            Sun Tour
         </div>
         <input type="checkbox" id="click"/>
         <label htmlFor="click" className="menu-btn">
         <i className="fas fa-bars"></i>
         </label>
         <ul>
     
           
            <li><a href="#">Posts</a></li>
            <li><a href="#">Dashboard</a></li>
            {/* <li><a href="#">Sin In</a></li>
            <li><a href="#">Sing Up</a></li> */}
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
         </ul>
      </nav>
     
    </div>
  );
};

export default AppBar;
