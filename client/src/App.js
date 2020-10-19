import React, { useEffect } from 'react';
import './App.css';
import Header from './containers/Header';
import SubHeader from './containers/SubHeader';
import ToDoList from './containers/ToDoList';
import ToDoForm from './components/ToDoForm';
import ColorThemeToggle from './components/ColorThemeToggle';
import store from './store';
import { addToDos } from './actions';
import { useSelector } from 'react-redux';
const LOCAL_STORAGE_KEY = 'toDosList';

function App() {
  let toDos = useSelector(state => state.toDos);

  useEffect(() => {
    // Get any toDos from local storage and add them to the store
    const toDosStored = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (toDosStored) {
      store.dispatch(addToDos(toDosStored));
    }
  }, []);

  useEffect(() => {
    // Update localStorage if there are toDos
    if (toDos) localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDos));
  }, [toDos]);

  return (
    <div className="AppContainer">
      <Header />
      <SubHeader />
      <ToDoList />
      <div className="AppContainer__toDoListControls">
        <ToDoForm />
        <ColorThemeToggle />
      </div>
    </div>
  );
}

export default App;
