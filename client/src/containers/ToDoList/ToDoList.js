import React from 'react';
import { useSelector } from 'react-redux';
import ToDoItem from '../../components/ToDoItem';
import './ToDoList.css';
let nextId = 0;

const ToDoList = () => {
  // Get the toDos from the store.
  const toDos = useSelector(state => state.toDos);
  // Filter the toDos based on filter setting in store.
  const filterOn = useSelector(state => state.filterOn);

  return (
    toDos
      // Filter to show only completed, or otherwise all
      .filter(toDoItem => (filterOn ? toDoItem.isComplete : true))
      .map(toDoItem => {
        return <ToDoItem key={++nextId} toDo={toDoItem} />;
      })
  );
};

export default ToDoList;
