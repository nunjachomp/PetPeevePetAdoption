import React, {useEffect, useState} from "react";
import { NavLink, useLocation } from "react-router-dom";
// import Modal from "react-modal"; //Signup Modal
import "./Header.css";
import logo from "../Images/logoName.png";
import downArrow from '../Images/downArrow.png'

// import { useNavigate } from 'react-router-dom' //Signup Modal

const Header = () => {
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(false); //** For two bottom buttons **//
  // const [isModalOpen, setIsModalOpen] = useState(false); //Signup Modal

  useEffect(() => {
    setIsHomePage(location.pathname === "/home"); //** For two bottom buttons **//
  }, [location.pathname]);

  // const closeModal = () => { //Signup Modal
  //   setIsModalOpen(false);
  // };

  // const [email, setEmail] = useState('') //Signup Modal
  // const [password, setPassword] = useState('') //Signup Modal

  // const navigate = useNavigate() //Signup Modal

  return (
    <>
    <nav className="header">
      <div className="headerLogo">
        <a href="/home"><img className="mainLogo" src={logo} alt="header" /></a>
      </div>
      <ul className="header_center">
        <li><a href="/home" className="home"> Home </a></li>
        <li><NavLink to="/allAdoptablePets" className="search">Search</NavLink></li>
        <li><NavLink to='/user/:id/' className="myPets">My Pets</NavLink></li>
        <li><NavLink to="/signup" className="signup">Sign Up</NavLink></li>
        <li><NavLink to="/" className="login">Login</NavLink></li>
        <li><NavLink to="/admin" className="admin">Admin</NavLink></li>
      </ul>
      <a href="/home#testimonials" className="testimonials" style={{ display: isHomePage ? "block" : "none" }}> Testimonials </a>
    </nav>
    <div className="buttonLeftContainer" style={{ display: isHomePage ? "flex" : "none" }}>
      <NavLink to="/allAdoptablePets" className="buttonLeft">Let's Adopt a Pet!</NavLink>
    </div>
    <div className="scrollForMore" style={{ display: isHomePage ? "flex" : "none" }}>Scroll Down To Learn More!
    <img src={downArrow} className='downArrow' style={{ display: isHomePage ? "flex" : "none" }} />
    </div>
    <div className="buttonRightContainer" style={{ display: isHomePage ? "flex" : "none" }}>
      <NavLink to="/sendPet" className="buttonRight">Admin Portal: Add Pets</NavLink>
    </div>
    {/* <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
      <form className="outerSignUpContainer2" onSubmit={''}>
        <div className="signUpContainer2">
          <div className="signUpText2">Sign up for Free!</div>
          <div className="signUpInputBox2">
            <div>Sign up email</div>
            <input type="email" className="signUpUserName2" placeholder="email@mail.com" value={email} onChange={e => setEmail(e.target.value)} required></input>
            <div className='reminder2'>Make a password you'll remember!</div>
            <input type="password" className="signUpPassword2" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required></input>
            <button className="signUpButton2" type="submit">Sign Up!</button>
          </div>
        </div>
      </form>
        <button onClick={closeModal}>Close</button>
      </Modal> */}
    </>
  );
};

export default Header;
