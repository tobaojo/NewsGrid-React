import React from 'react';
import '../App.css'
import logolight from '../img/logo_light.png'

const Footer = () => {
    return (
        <div id="main-footer" class="py-2">
      <div class="container footer-container">
        <div class="">
          <img src={logolight} alt="logo_light"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="">
          <h3>Email News Letter</h3>
          <p>Receive Email notifications directly from NewGrid.</p>
            <form class="" action="index.html" method="post" data-netlify="true" name="contact">
              <input type="email" name="email" placeholder="Email Address"/>
              <input type="submit" name="" value="Subscribe" class="btn btn-primary"/>
            </form>
        </div>
        <div class="">
          <h3> Site Link</h3>
          <ul class="list">
            <li><a href="#">Help and Support</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="">
          <h2>Join Our Club</h2>
          <p>Receive Email notifications directly from NewGrid.</p>
          <a href="#" class="btn btn-secondary">Join Now</a>
        </div>
        <div class="">
          <p>Copyright &copy All Rights Resevered</p>
        </div>
      </div>

        </div>
    )
}

export default Footer
