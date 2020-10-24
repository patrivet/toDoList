import React from 'react';
import Search from '../../components/Search';
import { useSelector } from 'react-redux';
import './Header.css';
import toDoIconLight from '../../imgs/todo-list-48-light.png';
import toDoIconDark from '../../imgs/todo-list-48-dark.png';

const Header = () => {
  const isLightThemeOn = useSelector(state => state.isLightThemeOn);
  console.log("Header -> isLightThemeOn", isLightThemeOn)
  return (
    <div className="header">
      <div className="header__iconAndTitle">
        <img className="header__icon" src={isLightThemeOn ? toDoIconDark : toDoIconLight} alt="toDoList_icon" />
        <h1 className="header__title">To Do List</h1>
      </div>
      <div className="header__search">
        <Search />
      </div>
    </div>
  );
};

export default Header;
