import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css'
const AboutMe = () => {
    return (
        <div>
             <div class = "about-wrapper">
      <div class = "about-left">
        <div class = "about-left-content">
          <div>
            <div class = "shadow">
              <div class = "about-img">
                <img src = "https://lh3.googleusercontent.com/a-/AOh14GhQWuCDgGdelLPDqGzY0-SGda1gKWaBPS3HhMtxyQ=s288-p-rw-no" alt = "about image" />
              </div>
            </div>

            <h2>Rabeya Islam</h2>
            <h3>Web developer</h3>
          </div>

          <ul class = "icons">
            <li><i class = "fab fa-facebook-f">F</i></li>
            <li><i class = "fab fa-twitter">T</i></li>
            <li><i class = "fab fa-linkedin">L</i></li>
            <li><i class = "fab fa-instagram">I</i></li>
          </ul>
        </div>
        
      </div>

      <div class = "about-right">
        <h1>Hello<span>!</span></h1>
        <h2>I m Rabeya Islam And I m a frontend developer</h2>
        <div class = "about-btns">
          <Link to="/" type = "button" class = "btn btn-pink">Go to Home</Link>
          
        </div>

        <div class = "about-para">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aspernatur possimus ullam quaerat, laboriosam ex voluptate aliquid laborum, obcaecati ratione accusamus! Ea nisi modi dolor nam numquam? Temporibus, molestias amet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus iure tempora alias laudantium sapiente impedit!</p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default AboutMe;