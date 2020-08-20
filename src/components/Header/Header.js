import React from 'react';
import './Header.css';

const Header = () => {

  return (
    <section className="header">
      <div className="navBar">
        <ul className="mainNav">
          <li><a href="#featured" >Featured</a></li>
          <li><a href="#cuisines" >Cuisines</a></li>
          <li><a href="#about" >About</a></li>
          <li><a href="#seasonal" >Seasonal</a></li>
        </ul>
      </div>
      <div className="logoBox">
        <h2 className="h2">TASTY.COM</h2>
        <h3 className="h3">{'The foodie\'s spot'}</h3>
        <div className="textBox">
          <div>
            <h1 className="headerText"> One Place to Find the Tastiest Food</h1>
          </div>
          <p><a className="mainButton" href="https://tastyfoodwebsite.netlify.app/">Search Recipes</a></p>
        </div>
      </div>
    </section>
  );
};

export default Header;

