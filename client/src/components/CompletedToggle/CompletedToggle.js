import React from 'react';
import store from '../../store';
import { filterToDos } from '../../actions';
import './CompletedToggle.css';

let inputState = false;

const toggleFilter = () => {
  store.dispatch(filterToDos());
  inputState = !inputState;
};

const toggleInput = () => {
  // toggle the inputState flag.
  document.getElementById('toggleCheckbox').checked = !inputState;
  toggleFilter();
};

const CompletedToggle = () => {
  return (
    <div className="container">
      <p onClick={toggleInput}>All</p>
      <label className="container__switch">
        <input type="checkbox" id="toggleCheckbox" onChange={toggleFilter} />
        <div></div>
      </label>
      <p onClick={toggleInput}>Completed</p>
    </div>
  );
};

export default CompletedToggle;
