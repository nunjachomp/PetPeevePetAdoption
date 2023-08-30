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
      const res = await axios.post('http://localhost:8080/users/signup', newUser);
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
        <div>Name</div>
        <input type="text" className="signUpName" placeholder="Name: First Last" value={name} onChange={e => setName(e.target.value)} required></input>
        <div>Sign up email</div>
        <input type="email" className="signUpEmail" placeholder="email@mail.com" value={email} onChange={e => setEmail(e.target.value)} required></input>
        <div className='reminder'>Make a password you'll remember!</div>
        <input type="password" className="signUpPassword" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required></input>
        <div className='rePassword'>Type your password one more time por favor</div>
        <input type="password" className="signUpRePassword" placeholder="Round Two!" value={rePassword} onChange={e => setRePassword(e.target.value)} required></input>
        <button className="signUpButton" type="submit">Sign Up!</button>
      </div>
    </div>
  </form>
  )
}

export default SignUp