import React from 'react';
import { searchToDos } from '../../actions';
import store from '../../store';

const Search = () => {
  const handleFormSubmit = e => {
    e.preventDefault();

    // Dispatch search action
    // get input value
    const searchVal = document.getElementById('searchForm__input').value;
    store.dispatch(searchToDos(searchVal));
  };

  const clearForm = () => {
    // Clear the entire form (the search text)
    document.getElementById('searchForm').reset();
  };

  return (
    <div>
      <form id="searchForm" onSubmit={handleFormSubmit}>
        <input id="searchForm__input"></input>
        <button type="submit">search here</button>
        <button type="submit" onClick={clearForm}>
          clear
        </button>
      </form>
    </div>
  );
};

export default Search;
