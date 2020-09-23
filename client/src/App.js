import React from 'react';
import './App.css';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader/>
      <ToDoList />
      <AddToDo />
    </div>
  );
}

export default App;
