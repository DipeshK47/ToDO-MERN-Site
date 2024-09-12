import React from 'react';
import './Signup.css';
import HeadingComp from './HeadingComp';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
const SignIn = () => {
  const dispatch = useDispatch()
  const history = useNavigate()
  const [Inputs, setInputs] = useState({ email: "", password: "" });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("Submitting data:", Inputs); // Log the input values
  
    axios.post("http://localhost:1000/api/v1/signin", Inputs)
      .then((response) => {
        sessionStorage.setItem("id", response.data.user._id)
        dispatch(authActions.login())
        history("/todo") // Handle success
      })
      .catch((error) => {
        console.error("Error during sign-in:", error); // Handle error
        if (error.response && error.response.status === 400) {
          alert(error.response.data.message); // Display message for invalid credentials
        } else {
          alert("An error occurred during sign-in.");
        }
      });
  };

  return (
    <div className='signup'>
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-6 column-left d-flex justify-content-center align-items-center">
            <div className='d-flex flex-column w-100 p-5 form-container'>
              <h2 className="form-heading">Welcome Back</h2>
              <p className="form-subtext">Sign in to your account</p>
              <input
                className='form-input p-2 my-2'
                type="email"
                name='email'
                placeholder='Enter Your Email'
                value={Inputs.email}
                onChange={change} // Add onChange handler
              />
              <input
                className='form-input p-2 my-2'
                type="password"
                name='password'
                placeholder='Enter Your Password'
                value={Inputs.password}
                onChange={change} // Add onChange handler
              />
              <button className='btn-signup p-2' onClick={submit}>Sign In</button>
              <p className="form-footer">Don't have an account? <a href="/signup">Sign up</a></p>
            </div>
          </div>
          <div className="col-lg-6 column-right d-flex justify-content-center align-items-center">
            <HeadingComp first='Sign' second='In'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;