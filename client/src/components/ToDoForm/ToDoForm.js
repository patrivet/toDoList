import React from 'react';
import './ToDoForm.css';
import store from '../../store';
import { addToDo } from '../../actions/actions';

const ToDoForm = () => {
  let toDo;

  const handleSubmit = event => {
    event.preventDefault();
    // If there is an toDo entered - addToDo
    // pass an action (from the predefined actions)
    if (toDo) {
      store.dispatch(addToDo(toDo));
      // clear the content from the input element & clear the toDo local var.
      document.getElementById('toDoForm').reset();
      toDo = null;
    }
  };

  const handleToDo = event => {
    const { value } = event.target;
    // If there is an toDo entered -store here.
    toDo = value;
  };

  return (
    <form onSubmit={handleSubmit} id="toDoForm">
      <input id="myInput" type="text" name="toDo" onChange={handleToDo}></input>
      <button type="submit">+</button>
    </form>
  );
};

export default ToDoForm;
