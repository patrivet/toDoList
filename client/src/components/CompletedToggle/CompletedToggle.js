import React from 'react';
import store from '../../store';
import { filterToDos } from '../../actions';
import './CompletedToggle.css';

let toggleState = false;

const toggleFilter = () => {
  store.dispatch(filterToDos());
  // Toggle the toggleState prop.
  toggleState = !toggleState;
};

const handleLabelClick = () => {
  // toggle the 'toggleCheckbox' input element
  document.getElementById('toggleCheckbox').checked = !toggleState;
  // toggle the toggleState flag.
  toggleFilter();
};

const CompletedToggle = () => {
  return (
    <div className="container">
      <p className="container__toggleLabel" onClick={handleLabelClick}>
        All
      </p>
      <label className="container__switch">
        <input type="checkbox" id="toggleCheckbox" onClick={toggleFilter} />
        <div></div>
      </label>
      <p className="container__toggleLabel" onClick={handleLabelClick}>
        Completed
      </p>
    </div>
  );
};

export default CompletedToggle;
