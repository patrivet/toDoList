import React from 'react';
import ToDoItem from '../ToDoItem';

// List of toDos imported from Redux - used here to loop and show single toDo items
// UFN - before using redux - use temp Array here

const tempToDoList = ['Put kettle on', 'Wash the car', 'Run some miles'];
let nextId = 0;

const ToDoList = () => {
  return (
    tempToDoList.map( toDoItem => {
      return <ToDoItem key={++nextId} toDo={toDoItem}/>
    })
  );
};

export default ToDoList;
