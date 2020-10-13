import React from 'react';
import { searchToDos } from '../../actions';
import store from '../../store';
import './Search.css';
import TextField from '@material-ui/core/TextField';

const Search = () => {
  const handleSearchInput = e => {
    // Store the search string and search ??
    const { value } = e.target;
    store.dispatch(searchToDos(value));
  };

  return (
    <div className="outlined-search-con">
      <TextField
        id="outlined-search"
        label="Search"
        type="search"
        variant="outlined"
        onChange={handleSearchInput}
      />
    </div>
  );
};

export default Search;
