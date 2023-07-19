import React, { useState } from 'react'
  
import { Link } from 'react-router-dom'

function State() {
  const[email,setemail]=useState('')
  const[pass,setpass]=useState('')
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  if (email && pass) {
    setSuccessMessage('SUCCESSFULLY REPORTED');
    setemail('');
    setpass('');
  } 

  else {
    setErrorMessage('Incorrect Id or Mobile Number');
  }
};
  return (
<>
<div className='log'>
<div className="login">
<h1 style={{fontSize:"25px"}}>Mobile Service Center</h1>
<form onSubmit={handleSubmit}>
{successMessage && <p className="success-message">{successMessage}</p>}
{errorMessage && <p className="error-message">{errorMessage}</p>}

      <label>Id Number.</label>
      <br></br>
      <br></br>
      <input type='email' onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter Email" Firstname="fname"/>
      <br></br>
      <br></br>
      <label>Mobile Number</label>
      <br></br>
      <br></br>
      <input type='pass' onChange={(e)=>{setpass(e.target.value)}} placeholder="Enter password" formNoValidate/>
      <br></br>
      <br></br>
      <button type='submit'>Check Report</button>
      <br></br>
    </form>
    
    </div>
    </div>
    </>
      )
    }
    
    export default State