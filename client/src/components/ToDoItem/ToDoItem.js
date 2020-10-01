import React from 'react';
import store from '../../store';
import { toggleToDo } from '../../actions/actions';

import './ToDoItem.css';
console.log('INFO: ToDo ITEM..');

const ToDoItem = ({ toDo }) => {
  const handleToDoClick = e => {
    console.log('Hi from ToDo click ');
    // ...? Dispatch toggle action
    store.dispatch(toggleToDo(toDo.id));
  };

  return (
    <div className="toDo">
      <div className="toDo__tickBox">
        <form>
          <input
            onChange={handleToDoClick}
            id="toDoCheck"
            name="toDoCheck"
            type="checkbox"
            checked={toDo.isComplete}
          ></input>
        </form>
      </div>
      <div className="toDo__text">{toDo.description}</div>
    </div>
  );
};

export default ToDoItem;
