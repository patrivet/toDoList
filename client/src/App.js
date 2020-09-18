import React from 'react';
import './App.css';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader/>
      <ToDoList />
    </div>
  );
}

export default App;
