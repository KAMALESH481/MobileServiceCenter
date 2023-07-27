import React from 'react'
import { Link } from 'react-router-dom'
import fb from '../img/fb.png'
import instagram from '../img/instagram.png'
import twitter from '../img/twitter.png'
import youtube from '../img/youtube.png'
import './foot.css'
function Footer() {
  return (
  
    <div className='footer'>
    <div className='section'>
    <div className='links'>
    <div className='div'>
    <h1 style={{fontSize:"25px"}}>Business</h1>
    <Link to="/contact"><p style={{fontSize:"15px"}}> Contact</p></Link>
    <Link to="/about"><p style={{fontSize:"15px"}}> About Us</p></Link>
    </div>
  
   
    <div className='below-links'>
    <h1 style={{fontSize:"25px"}}>Follow Us On:</h1>
    <div className='social'>
    <p><img src={fb} alt=""/></p>
    <p><img src={twitter} alt=""/></p>
    <p><img src={instagram} alt=""/></p>
    <p><img src={youtube} alt=""/></p>
    </div>
    </div>
    <ul>
    <h1 style={{fontSize:"25px"}}>Any Queries?</h1>
    <Link to="/terms"><p>Terms and Condition</p></Link>
    </ul>
    </div>
    <hr>
    </hr></div>
    </div>

    )
}

export default Footer