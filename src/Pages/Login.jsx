import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from "../Context/AuthContext"
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const {setUser} = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/login`, {email, password}, { withCredentials: true })
      if (res.data.ok) {
      setUser(res.data.userId)
    }
    } catch (err) {
      console.log(err)
    }
    navigate('/home')
  }


  return (
    <form className="outerLoginContainer" onSubmit={handleLogin}>
      <div className="loginWelcome">Welcome to Pet Peeve™! <br/>Where you can bring joy to a troubled pet!</div>
      <div className="loginContainer">
        <div className="loginText">Sign In or <Link to='/signup'>Sign Up</Link></div>
        <div className="loginInputBox">
          <input type="email" className="loginEmail" placeholder="email@mail.com" value={email} onChange={e => setEmail(e.target.value)}></input>
          <input type="password" className="loginPassword" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
          <button className="loginButton">Enter!</button>
        </div>
      </div>
    </form>
  );
};

export default Login;
