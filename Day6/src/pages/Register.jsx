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
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    async function submit(e){
        e.preventDefault();
    }
    const handleSubmit = (e) => {
      e.preventDefault();
    if (email && text && number && Address && pass && name) {
      setSuccessMessage('Logged successfully!');
      setFName('');
      setLName('');
      setmob('');
      setAdd('');
      setemail('');
      setpass('')
    } 
  
    else {
      setErrorMessage('Please fill in all fields.');
    }
  };
   
  return (
    <>
    <div className='login-container'>
    <div className="register"> 
    <h1 style={{fontSize:"25px"}}>Mobile Service Center</h1>
    <form onSubmit={handleSubmit}>
    {successMessage && <p className="success-message">{successMessage}</p>}
    {errorMessage && <p className="error-message">{errorMessage}</p>}
    <label>Firstname :</label>
    <br></br>
    <br></br>
    <input type='text' onChange={(e)=>{setFName(e.target.value)}} placeholder="Enter Firstname"/>
    <br></br>
    <br></br>
    <label>Lastname :</label>
    <br></br>
    <br></br>
    <input type='name' onChange={(e)=>{setLName(e.target.value)}} placeholder="Enter Lastname"/>
    <br></br>
    <br></br>
    <label>Mobile:</label>
    <br></br>
    <br></br>
    

    <input type='number' onChange={(e)=>{setmob(e.target.value)}} placeholder="Enter MobileNumber" />
    <br></br>
    <br></br>
    <label>Address :</label>
    <br></br>
    <br></br>
    <input type='Address' onChange={(e)=>{setAdd(e.target.value)}} placeholder="Enter Address"/>
    <br></br>
    <br></br>
    <label>Email id:</label>
    <br></br>
    <br></br>
    <input type='email' onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter Email"/ >
    <br></br>
    <br></br>
    <label>Password :</label>
    <br></br>
    <br></br>
    <input type='pass' onChange={(e)=>{setpass(e.target.value)}} placeholder="Enter password" formNoValidate/>
    <br></br>
    <br></br>
    <button type='submit'>Submit</button>
    </form>
    <br></br>
    <Link to='/login'>Click here to Login</Link>
    </div>
    
    </div>
    </>
  )
}

export default Register