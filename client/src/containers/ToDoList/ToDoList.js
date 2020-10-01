import React from 'react';
import { useSelector } from 'react-redux';
import ToDoItem from '../../components/ToDoItem';
import './ToDoList.css';
let nextId = 0;

const ToDoList = () => {
  // Get the toDos from the store.
  const toDos = useSelector(state => state.toDos);
  return toDos.map(toDoItem => {
    return <ToDoItem key={++nextId} toDo={toDoItem} />;
  });
};

export default ToDoList;
