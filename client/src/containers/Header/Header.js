import React from 'react';
import Search from '../../components/Search';
import './Header.css';
import toDoIcon from '../../imgs/todo-list-48.png';

const Header = () => {
  return (
    <div className="header">
      <img className="header__icon" src={toDoIcon} />
      <div className="header__search">
        <Search />
      </div>
    </div>
  );
};

export default Header;
