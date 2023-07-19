
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Feedback() {
  const[id,setid]=useState('')
  const[email,setemail]=useState('')
  const[desc,setdesc]=useState('')
  async function submit(e){
      e.preventDefault();
  }
  function validate()
  {
    if(id.length==0)
    {
      alert("Invalid,Enter valid Password")
    }
    if(email.length==0)
    {
      alert("Invalid,Enter valid Email")
    }
  }
  return (
<>
<div className='log'>
<div className="login">
<h1 style={{fontSize:"25px"}}>Mobile Service Center</h1>
<br></br>
<form>
<label>Enter id:</label>
<br></br>
<br></br>
<input type='id' onChange={(e)=>{setid(e.target.value)}} placeholder="Enter id" Firstname="fname"/>
<br></br>
<br></br>
<label>Enter email id :</label>
<br></br>
<br></br>
<input type='email' onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter Email" formNoValidate/>
<br></br>
<br></br>
<label>Enter Feedback</label>
<br></br>
<br></br>
<textarea style={{width:"200px",height:"100px"}} type='desc' onChange={(e)=>{setdesc(e.target.value)}} placeholder='Enter More than 100 words'/>

<br></br>
<br></br>
<br></br>
<button type='submit' onClick={() => {
  validate()
}}>
Send Feedback</button>
</form>
    </div>
    </div>
    </>
      )
    }
    
    export default Feedback