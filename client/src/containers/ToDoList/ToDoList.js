import React from 'react';
import { useSelector } from 'react-redux';
import ToDoItem from '../../components/ToDoItem';
import './ToDoList.css';
let nextId = 0;

const ToDoList = () => {
  // Get the toDos from the store.
  let toDos = useSelector(state => state.toDos);
  // Filter the toDos based on filter setting in store.

  // Optionally filter to show completed, or uncompleted
  const filter = useSelector(state => state.filter);
  if (filter !== 'all') {
    const filterForCompleted = filter === 'complete' ? true : false;
    toDos = toDos.filter(toDo => {
      return toDo.isComplete === filterForCompleted;
    });
  }

  // Filter results if there's search text
  let searchText = useSelector(state => state.searchText);
  if (searchText) {
    searchText = searchText.trim();
    if (searchText.length) {
      toDos = toDos.filter(toDo =>
        toDo.description.split(' ').includes(searchText)
      );
    }
  }

  return (
    <div className="toDoListMasterContainer">
      <div className="toDoListContainer">
        {toDos.map(toDoItem => {
          return <ToDoItem key={++nextId} toDo={toDoItem} />;
        })}
      </div>
    </div>
  );
};

export default ToDoList;
