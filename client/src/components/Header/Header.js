import React from 'react';
import Search from '../Search';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <p className="header__logo">LOGO</p>
      <div className="header__search">
        <Search/>
      </div>

    </div>
  )
};

export default Header;
