import React from 'react';
import { searchToDos } from '../../actions';
import store from '../../store';
import './Search.css';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../config/ColorVariables';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: colors.click_color,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: colors.border_color,
      },
      '&:hover fieldset': {
        borderColor: colors.hover_color,
      },
      '&.Mui-focused fieldset': {
        borderColor: colors.click_color,
      },
    },
  },
})(TextField);

const Search = () => {
  const handleSearchInput = e => {
    // Store the search string and search ??
    const { value } = e.target;
    store.dispatch(searchToDos(value));
  };

  return (
    <div className="outlined-search-con">
      <CssTextField
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
