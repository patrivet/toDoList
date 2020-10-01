import React from 'react';
import { useSelector } from 'react-redux';
import ToDoItem from '../../components/ToDoItem';
import './ToDoList.css';
console.log('INFO: ...ToDo LIST..');

let nextId = 0;

const ToDoList = () => {
  // Get the toDos from the store.
  const toDos = useSelector(state => state.toDos);
  console.log('ToDoList -> toDos', toDos);
  return toDos.map(toDoItem => {
    return <ToDoItem key={++nextId} toDo={toDoItem} />;
  });
};

export default ToDoList;
