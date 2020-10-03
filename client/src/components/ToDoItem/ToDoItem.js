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
    <div className="toDo">
      <div className="toDo__tickBox">
        <form>
          <input
            onChange={handleToDoClick}
            type="checkbox"
            checked={toDo.isComplete}
          ></input>
        </form>
      </div>
      <div className={`toDo__text ${toDo.isComplete && 'toDo--isComplete'}`}>
        {toDo.description}
      </div>
    </div>
  );
};

export default ToDoItem;
