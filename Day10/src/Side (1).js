import React from 'react';
import './admin.css';
import pic111 from './user.png';

import AdminLogin from './AdminLogin';
import { Link } from 'react-router-dom';

function Side() {

  return (
    <body>
    <div class="wrapper">
    <div class="section">
 <div class="top_navbar">
   <div class="hamburgerr">
     
       {/* <button><MenuIcon /> </button>   */}
   </div>
 </div>
 <div class="containerr">
  <AdminLogin/>
 </div>
</div>
     <div class="sidebarad">
         <div class="profilee">
             <img src={pic111} alt="profile_picture"/>
             <h3>NK</h3>
             <p>Admin</p>
         </div>
         <ul>
             <li>
                 <a href="#" class="active">
                     <span class="icon"><i class="fas fa-home"></i></span>
                     <span class="item">Show Bookings</span>
                 </a>
             </li>
             <Link to="/update"><li>
                 <a href="#">
                     <span class="icon"><i class="fas fa-desktop"></i></span>
                     <span class="item">Update Booking</span>
                 </a>
             </li></Link>
             <li>
                 <a href="#">
                     <span class="icon"><i class="fas fa-user-friends"></i></span>
                     <span class="item">Delete Booking</span>
                 </a>
             </li>
             <li>
                 <a href="#">
                     <span class="icon"><i class="fas fa-tachometer-alt"></i></span>
                     <span class="item">Perfomance</span>
                 </a>
             </li>
             <li>
                 <a href="#">
                     <span class="icon"><i class="fas fa-database"></i></span>
                     <span class="item">Development</span>
                 </a>
             </li>
             <li>
                 <a href="#">
                     <span class="icon"><i class="fas fa-chart-line"></i></span>
                     <span class="item">Reports</span>
                 </a>
             </li>
             <li>
                 <a href="#">
                     <span class="icon"><i class="fas fa-user-shield"></i></span>
                     <span class="item">Admin</span>
                 </a>
             </li>
             <li>
                 <a href="#">
                     <span class="icon"><i class="fas fa-cog"></i></span>
                     <span class="item">Settings</span>
                 </a>
             </li>
         </ul>
     </div>
     
 </div>
 </body>
  );
}

export default Side;