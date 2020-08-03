import React from 'react';
import NavArrow from './NavArrow';

const Header = () => {
  return (
    <header>
      <h1 style="margin-bottom: 10px;">LOREM IPSUM</h1>
      <p style="width: 70%; font-size: large; margin-top: 0;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </header>
    <NavArrow />
  );
};

export default Header;
