import React, { useState } from 'react';
import './Appointment.css';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookAppointment = () => {
  const [customername, setCustomerName] = useState('');
  const [email,setEmail]=useState('');
  const [mobilemodel, setMobileModel] = useState('');
  const [issue, setIssue] = useState('');
  const [appointmentdate, setAppointmentDate] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
 let navigate=useNavigate('');
  const handleSubmit = (e) => {
    const apppoint={
    customername:customername,
    email:email,
    mobilemodel:mobilemodel,
    issue:issue,
   appointmentdate:appointmentdate
  }
axios.post('http://127.0.0.1:8081/feedback/AddDetails',apppoint);
 
navigate("/")
    if (customername && mobilemodel && issue && appointmentdate&&email) {
      setSuccessMessage('Appointment booked successfully!');
      setCustomerName('');
      setMobileModel('');
      setIssue('');
      setAppointmentDate('');
      setEmail('');
    } 
    else {
      setErrorMessage('Invalid,Please fill in all fields.');
    }
  };

  return (
    <div className="book-appointment">
      <h2>Problem Details</h2>
      <form onSubmit={handleSubmit}>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <label htmlFor="customerName">Customer Name:</label>
        <input
          type="text"
          id="customerName"
          value={customername}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <label htmlFor="Email">Email:</label>
        <input
          type="email"
          id="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="mobileModel">Mobile Model:</label>
        <input
          type="text"
          id="mobileModel"
          value={mobilemodel}
          onChange={(e) => setMobileModel(e.target.value)}
        />

        <label htmlFor="issue">Issue:</label>
        <textarea style={{height:"100px"}}
          id="issue"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        />

        <label htmlFor="appointmentDate">Appointment Date:</label>
        <input
          type="date"
          id="appointmentDate"
          value={appointmentdate}
          onChange={(e) => setAppointmentDate(e.target.value)}
        />

        <button type="submit">Book an Appointment</button>
      </form>
    </div>
  );
};

export default BookAppointment;