import React from 'react'
import { Link } from 'react-router-dom'
import fb from '../img/fb.png'
import instagram from '../img/instagram.png'
import twitter from '../img/twitter.png'
import youtube from '../img/youtube.png'
function Footer() {
  return (
  
    <div className='footer'>
    <div className='section'>
    <div className='links'>
    <div className='div'>
    <h1> Business</h1>
    <Link to=""><p> Employee</p></Link>
    <Link to=""><p> Contact</p></Link>
    <Link to=""><p> About Us</p></Link>
    <Link to=""><p> Employee</p></Link>
    </div>
    <div className='sb'>
    <h1>Resources</h1>
    <Link to=""><p> Employee</p></Link>
    <Link to=""><p> Contact</p></Link>
    
    </div>
    <div className='cb'>
    <h1>Records</h1>
    <Link to=""><p> Employee</p></Link>
    <Link to=""><p> Contact</p></Link>
    </div>
    <div className='Ace'>
    <h1>Follow us on</h1>
    <div className='social'>
    <p><img src={fb} alt=""/></p>
    <p><img src={twitter} alt=""/></p>
    <p><img src={instagram} alt=""/></p>
    <p><img src={youtube} alt=""/></p>
    </div>
    </div>
    </div>
    <div className='below'>
    
    <div className='below-links'>
    <Link to="/index"><div><p>Terms and Condition</p></div></Link>
    <Link to="/index"><div><p>Privacy</p></div></Link>
    <Link to="/index"><div><p>Cookies</p></div></Link>
    <Link to="/index"><div><p>Security</p></div></Link>
    </div>
    </div>
    <hr>
    </hr></div>
    </div>
  
    )
}

export default Footer