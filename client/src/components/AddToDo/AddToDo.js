import React from 'react';
import './AddToDo.css';

const AddToDo = () => {
  let toDo = '';

  const handleSubmit = (event) => {
    event.preventDefault();
    // If there is an toDo entered - addToDo
  }

  const handleToDo = event => {
    const { value } = event.target;
    // If there is an toDo entered -store here.
    toDo = value;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="toDo" onChange={handleToDo}></input>
      <button type="submit">+</button>
    </form>
  );
};

export default AddToDo;
