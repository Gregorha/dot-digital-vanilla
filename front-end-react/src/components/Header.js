import React from 'react';
import './Header.css';
import NavArrow from './NavArrow';

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <h1>LOREM IPSUM</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <NavArrow className="nav-arrow-wrapper-header" />
    </header>
  );
};

export default Header;
