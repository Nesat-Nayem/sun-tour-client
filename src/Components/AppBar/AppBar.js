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











// import React, { useState } from 'react';
// import './AppBar.css'
// import { NavLink } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa'

// // import useAuth from '../hooks/useAuth';

// import useAuth from '../hooks/useAuth';

// import { HashLink } from 'react-router-hash-link';

// const AppBar = () => {
//   const [isShow, setIsShow] = useState(false)
//   const { user, singOutUser } = useAuth()
//   return (
//     <div className='header'>
//       <div className="navbar custom-container">
//         <div className="logo">
//           <h1>Sky <span>Stars</span></h1>
//         </div>
//         <nav>
//           <ul className={!isShow ? "menu" : 'menu show'}>
//             <li>
//               <NavLink to='/'>Home</NavLink>
//             </li>
//             <li>
//               <HashLink to='/home#services'>Service</HashLink>
//             </li>
//             <li>
//               <HashLink to='/home#about'>About</HashLink>
//             </li>
//             <li>
//               <HashLink to='/home#contact'>Contact</HashLink>
//             </li>
//             <li>
//               <NavLink to='/dashboard'>Dashboard</NavLink>
//             </li>
//           </ul>
//           {
//             !user.email ? <ul className='login-regi'>
//               <li>
//                 <NavLink to='/login'>Login</NavLink>
//               </li>
//               <li>
//                 <NavLink to='/register'>Register</NavLink>
//               </li>
//             </ul> : <div className='user-info'>
//               <button onClick={singOutUser}>Sign Out</button>
//               <h1>{user.displayName?.split(' ')[0]}</h1>
//             </div>
//           }
//         </nav>
//         <div onClick={() => setIsShow(!isShow)} className="hambarger">
//           <FaBars />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppBar;

