import React from 'react';
import './App.css';
import Header from './containers/Header';
import SubHeader from './containers/SubHeader';
import ToDoList from './containers/ToDoList';
import ToDoForm from './components/ToDoForm';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <SubHeader />
        <ToDoList />
        <ToDoForm />
      </div>
    </Provider>
  );
}

export default App;
