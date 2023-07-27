
import React, { useState } from 'react';
import './register.css'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
// import { login } from '../Redux/UserSlice';


const Register   = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();


  const [name, setname] = useState("")
  // const [lname, setlname] = useState("");
  // const [address, setaddress] = useState('');
  const [contact, setcontact] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handlePasswordChange = (event) => {
    setpassword(event.target.value);
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault(); 

    const data={name:name,contact:contact,"email":email, "password": password};
    // console.log(data);
    const result=await axios.post("http://localhost:8181/api/v1/auth/register",data)
   
    navigate('/')
    // dispatch(login(email))
      if (result.data === "Signup Successful !") {
        toast.success('Signup Successful !', {
          position:"top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          navigate('/');
        }, 1500);
          
        
      } else {
      console.log(result.data);
      }
         };
  return (
    <section id='rohith'>
      <div className="login-container">
        <div className="register">
          <h3>SIGN UP</h3>
          <form onSubmit={handleSubmit}>
            <div>
            <label>Name :</label>
            <br></br>
            
            <input type='name' onChange={(e)=>{setname(e.target.value)}} placeholder="Enter name"/>
            <br></br>
          
           
            <label>Email id:</label>
            <br></br>
           
            <input type='email' onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter Email"/>
            <br></br>
           
            <label>contact Number :</label>
            <br></br>
            
            <input type='name' onChange={(e)=>{setcontact(e.target.value)}} placeholder="Enter number"/>
            <br></br>
            
            <label>Password :</label>
            <br></br>
            
            <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                      />
              <span className="border"></span>
            </div>
            <br></br>
            <input type="submit" value="Register" style={{backgroundColor:"blue",marginLeft:"40px",width:"100px"}}className="private-inp" />
            <p>
              Already Have an Account?
              <a href="/">Login Here</a>
            </p>
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
              theme='red'
/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;