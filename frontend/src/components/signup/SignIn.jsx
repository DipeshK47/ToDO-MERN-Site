import React from 'react'
import './Signup.css';
import HeadingComp from './HeadingComp';

function SignIn() {
  return (
    <div className='signup'>
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-6 column-left d-flex justify-content-center align-items-center">
            <div className='d-flex flex-column w-100 p-5 form-container'>
              <h2 className="form-heading">Welcome Back</h2>
              <p className="form-subtext">Sign in to your account</p>
              <input className='form-input p-2 my-2' type="email" name='email' placeholder='Enter Your Email' />
              <input className='form-input p-2 my-2' type="text" name='username' placeholder='Enter Your Username' />
              <input className='form-input p-2 my-2' type="password" name='password' placeholder='Enter Your Password' />
              <button className='btn-signup p-2'>Sign In</button>
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