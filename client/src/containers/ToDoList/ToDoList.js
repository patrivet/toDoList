import React from 'react';
import { useSelector } from 'react-redux';
import ToDoItem from '../../components/ToDoItem';
let nextId = 0;

const ToDoList = () => {
  // Get the toDos from the store.
  const toDoListFromStore = useSelector(state => state.toDos);
  return toDoListFromStore.map(toDoItem => {
    return <ToDoItem key={++nextId} toDo={toDoItem.description} />;
  });
};

export default ToDoList;
