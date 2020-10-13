import React from 'react';
import store from '../../store';
import { toggleToDo } from '../../actions';
import './ToDoItem.css';

const ToDoItem = ({ toDo }) => {
  const handleToDoClick = () => {
    // Dispatch toggle action
    store.dispatch(toggleToDo(toDo.id));
  };

  return (
    <>
      <div className="toDo__tickBox" onClick={handleToDoClick}>
        <input
          type="checkbox"
          checked={toDo.isComplete}
          onChange={() => {}}
        ></input>
      </div>
      <div className={`toDo__text ${toDo.isComplete && 'toDo--isComplete'}`}>
        {toDo.description}
      </div>
    </>
  );
};

export default ToDoItem;
