import React from "react";
import './Header.css'
import logo from './logo.png'

function Header() {
  return <div>
    <header>
        <img src={logo} alt="" />
        <ul>
            <li>HOME</li>
            <li>CONTACT</li>
            <li>ABOUT</li>
            <li>FAQ</li>
        </ul>
    </header>

  </div>;
}

export default Header;
