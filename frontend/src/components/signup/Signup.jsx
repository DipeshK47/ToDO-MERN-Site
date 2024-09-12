import React from 'react';
import './Signup.css';
import HeadingComp from './HeadingComp';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const history = useNavigate()
    const [Inputs, setInputs] = useState({email: "", username: "", password: ""});

    const change = (e) => {
      const {name, value} = e.target;
      setInputs({...Inputs, [name]: value});
    }

    const submit = async (e) => {
      e.preventDefault();
      try {
        console.log("Submitting data:", Inputs); // Log the input values
        const response = await axios.post("http://localhost:1000/api/v1/register", Inputs);
    
        // Handle the response based on the message
        if (response.data.message === "User Already Exists") {
          alert(response.data.message);
        } else {
          alert(response.data.message);
          setInputs({email: "", username: "", password: ""});
          history("/signin")
        }
      } catch (error) {
        // Check for 400 error (already existing user) and display an alert
        if (error.response && error.response.status === 400) {
          alert(error.response.data.message); // Show "User Already Exists" message
        } else {
          console.error("Error during signup:", error);
          alert("An error occurred during signup.");
        }
      }
    };

    return (
      <div className='signup'>
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-lg-6 column-left d-flex justify-content-center align-items-center">
              <div className='d-flex flex-column w-100 p-5 form-container'>
                <h2 className="form-heading">Create an Account</h2>
                <p className="form-subtext">Sign up to get started</p>
                <input className='form-input p-2 my-2' type="email" name='email' placeholder='Enter Your Email' onChange={change}  value={Inputs.email}/>
                <input className='form-input p-2 my-2' type="text" name='username' placeholder='Enter Your Username' onChange={change} value={Inputs.username} />
                <input className='form-input p-2 my-2' type="password" name='password' placeholder='Enter Your Password' onChange={change} value={Inputs.password} />
                <button className='btn-signup p-2' onClick={submit}>Sign Up</button>
                <p className="form-footer">Already have an account? <a href="/signin">Sign In</a></p>
              </div>
            </div>
            <div className="col-lg-6 column-right d-flex justify-content-center align-items-center">
              <HeadingComp first='Sign' second='Up'/>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Signup;