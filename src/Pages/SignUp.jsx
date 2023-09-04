import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import './SignUp.css'


const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('');

  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault()
    const newUser = {
      name,
      email,
      password,
      rePassword,
    };

    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/signup`, newUser);
      if (res.data.ok) {
        navigate('/');
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form className="outerSignUpContainer" onSubmit={handleSignUp}>
    <div className="signUpContainer">
      <div className="signUpText">Sign up for Free!</div>
      <div className="signUpInputBox">
        <div className='name'>Name</div>
        <input type="text" className="signUpName" placeholder="Name: First and Last" value={name} onChange={e => setName(e.target.value)} required></input>
        <div className='email'>Sign up email</div>
        <input type="email" className="signUpEmail" placeholder="name@email.com" value={email} onChange={e => setEmail(e.target.value)} required></input>
        <div className='password'>Make a password you'll remember!</div>
        <input type="password" className="signUpPassword" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required></input>
        <div className='rePassword'>Retype your password please!</div>
        <input type="password" className="signupRepassword" placeholder="Repeat Password" value={rePassword} onChange={e => setRePassword(e.target.value)} required></input>
        <button className="signUpButton" type="submit">Sign Up!</button>
      </div>
    </div>
  </form>
  )
}

export default SignUp