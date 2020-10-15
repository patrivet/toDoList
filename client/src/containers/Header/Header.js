import React from 'react';
import Search from '../../components/Search';
import './Header.css';
import toDoIcon from '../../imgs/todo-list-48.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header__iconAndTitle">
        <img className="header__icon" src={toDoIcon} />
        <h1 className="header__title">To Do List</h1>
      </div>
      <div className="header__search">
        <Search />
      </div>
    </div>
  );
};

export default Header;
