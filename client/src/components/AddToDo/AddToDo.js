import React from 'react';
import './AddToDo.css';
import store from '../../redux/store';
import { addToDo } from '../../redux/actions';

const AddToDo = () => {
  let toDo = '';

  const handleSubmit = (event) => {
    event.preventDefault();
    // If there is an toDo entered - addToDo

    // pass an action (from the predefined actions)
    store.dispatch(addToDo(toDo));
  };

  const handleToDo = (event) => {
    const { value } = event.target;
    // If there is an toDo entered -store here.
    toDo = value;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="toDo" onChange={handleToDo}></input>
      <button type="submit">+</button>
    </form>
  );
};

export default AddToDo;
