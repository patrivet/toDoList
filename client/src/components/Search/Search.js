import React, { useState } from 'react';
import { searchToDos } from '../../actions';
import store from '../../store';
import './Search.css';
import clearImg from '../../imgs/clear.png';

const Search = () => {
  const [resetSearch, setResetSearch] = useState('');
  const handleFormSubmit = e => {
    e.preventDefault();
    handleSearch();
  };

  const clearForm = () => {
    // Clear the entire form (the search text)
    document.getElementById('searchForm').reset();
    setResetSearch('');
    handleSearch();
  };

  const handleSearch = () => {
    console.log('SEARCH: handleSearch()');
    // Dispatch search action
    // get input value
    const searchVal = document.getElementById('searchForm__input').value;
    store.dispatch(searchToDos(searchVal));
  };

  const handleSearchInput = e => {
    // Store the search string and search ??
    const { name, value } = e.target;
    setResetSearch(value ? 'show' : '');
    store.dispatch(searchToDos(value));
  };

  return (
    <div>
      <form id="searchForm" onSubmit={handleFormSubmit}>
        <input
          id="searchForm__input"
          name="searchForm__input"
          onKeyUp={handleSearchInput}
          placeholder="🔍  Enter search..."
        ></input>
        <button type="submit">search here</button>

        <img
          className={`searchForm__reset ${resetSearch}`}
          src={clearImg}
          onClick={clearForm}
        ></img>
      </form>
    </div>
  );
};

export default Search;
