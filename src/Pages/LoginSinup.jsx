import React from 'react'
import './CSS/LoginSinup.css'

const LoginSinup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email Adress' />
          <input type="password" placeholder='Password' />
          <button>Continue</button>
          <p className='login'>Alredy have an Account? <span>Login Here</span> </p>
          <div className="agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing I agree to the terms of use and privacy policy</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSinup
