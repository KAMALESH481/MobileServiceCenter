import React from 'react'
import './profile.css';
import {useSelector } from 'react-redux/es/hooks/useSelector'
import { logout, selectUser } from './Redux/UserSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import a from "../src/img/a.jpg"


export default function Profile() {
  const user=useSelector(selectUser)
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleLogout=()=>
  {
    dispatch(logout());
 
    navigate("/");
  }
  if(!user)
  {
    navigate('/')
    return null;
  }
  return (
    <>
  
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<center><h1 style={{marginLeft:"550px"}}>Your Profile</h1></center>
<div class="profile-card" style={{width:"240px",marginLeft:"600px"}}>
    <div className="mh">
    <img src={a} alt=" " ></img>
    </div>
 
    <h1>{user.Username}</h1>
    <ul>
      <li><strong>Email:</strong>kamaleshme0007@gmail.com</li>
      <li><strong>Contact:</strong> 123-456-7890</li>
    </ul>
    <button onClick={handleLogout}>Logout</button>
   
  </div>

    </>
  )
}