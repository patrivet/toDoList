import React from 'react';
import './App.css';
import Header from './containers/Header';
import SubHeader from './containers/SubHeader';
import ToDoList from './containers/ToDoList';
import ToDoForm from './components/ToDoForm';
import ColorThemeToggle from './components/ColorThemeToggle';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="AppContainer">
      <Provider store={store}>
        <div className="App">
          <Header />
          <SubHeader />
          <ToDoList />
          <ToDoForm />
          <ColorThemeToggle />
        </div>
      </Provider>
    </div>
  );
}

export default App;
