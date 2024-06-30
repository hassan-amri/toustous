import React from "react";
import "./Hero.css";
import Header from "./Header";
import boy from './boy.png'

function Hero() {
  return (
    <div className="hero">
      <Header />

      <div className="hero__content">
        <div className="hero__left">
          <div className="brandName">Toustous</div>
          <h3>Academy</h3>
          <p>
            Welcome to our website! We are dedicated to helping you learn
            English and pass your baccalaureate exam. Our lessons and resources
            are made to be easy to understand and helpful. We believe that with
            the right support, everyone can succeed. Join us on your journey to success!
          </p>
          <button className="discover">Discover</button>
          <button className="start">Start now</button>
        </div>
        <div className="hero__right">
          <img src={boy} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
