import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Feedback= () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };


  const handleSubmit = async(e) => {
    e.preventDefault(); 
      const reg={"name":name,"email":email, "message":message};
      console.log(reg);
    const result=await axios.post("http://localhost:8081/feedback/addf",reg);
    console.log(result.data);
    toast.success("Message sent Succesfully!",{
      theme:"light",
    });
    window.location.reload();
  }
  return (
    <div className="contact-container" style={{marginLeft:"600px",marginTop:"160px",color:"white",border:"1px solid #d6d7da",height:"400px",width:"300px"}}>
    <form onSubmit={handleSubmit}>
    <div className="form-group" >
    <center><h2 >Feedback</h2></center>
    <br></br>
          <label htmlFor="name">Name:</label>
          <br></br>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <br></br>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <br></br>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <br></br>
        <button type="submit" className="submit-btn">Submit</button>
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
            />
      </form>
    </div>
  );
};

export default Feedback;