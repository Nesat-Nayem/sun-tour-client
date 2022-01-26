import React from "react";

import "./AppBar.css";
const AppBar = () => {
   
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
            {/* <li><a className="active" href="#">Home</a></li> */}
           
            <li><a href="#">Posts</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Log In</a></li>
            <li><a href="#">Log Out</a></li>
         </ul>
      </nav>
     
    </div>
  );
};

export default AppBar;
