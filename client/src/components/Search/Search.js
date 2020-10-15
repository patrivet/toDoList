import React from 'react';
import { searchToDos } from '../../actions';
import store from '../../store';
import { useSelector } from 'react-redux';
import './Search.css';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { getColor } from '../../config/ColorVariables';

const Search = () => {
  const isLightThemeOn = useSelector(state => state.isLightThemeOn);
  const click_color = getColor('click_color', isLightThemeOn);
  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: click_color,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: getColor('border_color', isLightThemeOn),
        },
        '&:hover fieldset': {
          borderColor: getColor('hover_color', isLightThemeOn),
        },
        '&.Mui-focused fieldset': {
          borderColor: click_color,
        },
      },
    },
  })(TextField);

  const handleSearchInput = e => {
    // Get the search string and dispatch
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
        autoComplete="off"
      />
    </div>
  );
};

export default Search;
