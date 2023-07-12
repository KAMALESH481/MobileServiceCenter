import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./register.css"
function Register() {
    const[text,setFName]=useState('')
    const[name,setLName]=useState('')
    const[number,setmob]=useState('')
    const[Address,setAdd]=useState('')
    const[email,setemail]=useState('')
    const[pass,setpass]=useState('')
    async function submit(e){
        e.preventDefault();
    }
    function validateForm()
    {
      if(text.length==0)
      {
        alert('First Name can not be empty')
        return
      }
      if(name.length==0)
      {
        alert('Last Name can not be empty')
        return
      }
      if(number.length<10||number.length>10)
      {
        alert('Mobile number is Invalid')
        return
      }
      if(Address.length==0)
      {
        alert('Last Name can not be empty')
        return
      }
      if(pass.length<10)
      {
        alert('Password is not strong')
        return

      }
    }
  return (
    <>
    <div className='login-container'>
    <div className="register"> 
    <h1>Mobile Service Center</h1>
    <form>
    <label>Firstname :</label>
    <br></br>
    <input type='text' onChange={(e)=>{setFName(e.target.value)}} placeholder="Enter Firstname"/>
    <br></br>
    <label>Lastname :</label>
    <br></br>
    <input type='name' onChange={(e)=>{setLName(e.target.value)}} placeholder="Enter Lastname"/>
    <br></br>
    <label>Mobile:</label>
    <br></br>
    <input type='number' onChange={(e)=>{setmob(e.target.value)}} placeholder="Enter MobileNumber" />
    <br></br>
    <label>Address :</label>
    <br></br>
    <input type='Address' onChange={(e)=>{setAdd(e.target.value)}} placeholder="Enter Address"/>
    <br></br>
    <label>Email id:</label>
    <br></br>
    <input type='email' onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter Email"/ >
    <br></br>
    <label>Password :</label>
    <br></br>
    <input type='pass' onChange={(e)=>{setpass(e.target.value)}} placeholder="Enter password" formNoValidate/>
    <br></br>
    <br></br>
    <button type='submit' onClick={() => {
      validateForm()
  }}>Submit</button>
    </form>
    <br></br>
    <Link to='/'>Click here to Login</Link>
    </div>
    
    </div>
    </>
  )
}

export default Register