import React from 'react';
import './ToDoItem.css';

const ToDoItem = ({toDo}) => {
  return (
    <div className="toDo">
      <div className="toDo__tickBox">
        <form>
          <input type="checkbox"></input>
        </form>
      </div>
      <div className="toDo__text">{toDo}</div>
    </div>
  );
};

export default ToDoItem;
