import React from 'react';
import "./Header.css"
import { logo, menu, heroimage } from "../../images"

const Header = () => {
  return (
    <header>
      <div className="wrapper">
      <img src={logo} alt="logo" className="logo"></img>
      <img src={menu} alt="menu" className="menu"></img>
      </div>
  
<div className="header">
  <img src={heroimage} alt="heroimage" className="hero-image"></img>
      <p>W E L C O M E</p>
      <h1>Lorem ipsum dolor sit amet consectetur</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
    <a href="#Explore" className="explore-btn">Explore</a>
    </div>
    </header>
  );
};

export default Header;