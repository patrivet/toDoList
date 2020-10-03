import React from 'react';
import './ToDoForm.css';
import store from '../../store';
import { addToDo } from '../../actions';

const ToDoForm = () => {
  let toDo;

  const handleSubmit = event => {
    event.preventDefault();
    // Get entry in the toDo input
    toDo = document.getElementById('description_input').value;

    // If there is an toDo entered - dispatch the addToDo action
    if (toDo) {
      store.dispatch(addToDo(toDo));
      // clear the content from the input element & clear the toDo local var.
      document.getElementById('toDoForm').reset();
      toDo = null;
    }
  };

  // Currently not being used as onChange on input wasn't firing for a duplicate value.
  // const handleToDo = event => {
  //   const { value } = event.target;
  //   // If there is an toDo entered -store here.
  //   toDo = value;
  // };

  return (
    <form onSubmit={handleSubmit} id="toDoForm">
      <input id="description_input" type="text" name="toDo"></input>
      <button type="submit">+</button>
    </form>
  );
};

export default ToDoForm;
