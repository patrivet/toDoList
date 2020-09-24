import React from 'react';
import './App.css';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';
import store from './redux/store';
import { Provider } from 'react-redux';

store.subscribe( () => {
  console.log('INFO: App.js :: Subscribed to the store');
  console.log(store.getState());
})

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <SubHeader/>
        <ToDoList />
        <AddToDo />
      </div>
    </Provider>
  );
}

export default App;
