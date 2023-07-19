  import React, { useState } from 'react'
  
  import { Link } from 'react-router-dom'

  function Login() {
    const[email,setemail]=useState('')
    const[pass,setpass]=useState('')
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
    if (email && pass) {
      setSuccessMessage('Logged successfully!');
      setemail('');
      setpass('');
    } 
  
    else {
      setErrorMessage('Please fill in all fields.');
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

        <label>Email id:</label>
        <br></br>
        <br></br>
        <input type='email' onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter Email" Firstname="fname"/>
        <br></br>
        <br></br>
        <label>Password :</label>
        <br></br>
        <br></br>
        <input type='pass' onChange={(e)=>{setpass(e.target.value)}} placeholder="Enter password" formNoValidate/>
        <br></br>
        <br></br>
        <button type='submit'>Submit</button>
        <br></br>
      </form>
      <br></br>
      <Link to={'/register'}>Click here to register here</Link>
      </div>
      </div>
      </>
        )
      }
      
      export default Login
   