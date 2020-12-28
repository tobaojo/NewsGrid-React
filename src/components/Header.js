import React from 'react'
import logo from '../img/logo.png'
import '../App.css'

export const Header = () => {
    return (
        <div className="main-nav">
      <div className="container">
        <img src={logo} alt="logo" class="logo"/>
        <div className="socials">
          <a href="http://facebook.com" target="_blank"><i className="fab fa-facebook fa-2x"></i></a>
          <a href="http://twitter.com" target="_blank"><i className="fab fa-twitter fa-2x"></i></a>
          <a href="http://instagram.com" target="_blank"><i className="fab fa-instagram fa-2x"></i></a>
          <a href="http://youtube.com" target="_blank"><i className="fab fa-youtube fa-2x"></i></a>
         </div>
         <ul>
           <li><a className="current" href="index.html">Home</a></li>
           <li><a href="about.html">About</a></li>
         </ul>
      </div>
        </div>
    )
}

export default Header;
