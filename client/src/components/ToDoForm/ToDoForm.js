import React from 'react';
import './ToDoForm.css';
import store from '../../store';
import { addToDo } from '../../actions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CreateTwoTone from '@material-ui/icons/CreateTwoTone';
import InputAdornment from '@material-ui/core/InputAdornment';

import { withStyles } from '@material-ui/core/styles';

// Define materialUI colors for input (text) field
let isDarkThemeOn = true;

// Light theme (postfix __L)
let focus_color__L = '#BDBDBD'; // light grey
let border_color__L = 'black';
let click_color__L = '#3F51B5'; // blue

// Dark theme colors (postfix __D)
let focus_color__D = 'white';
let border_color__D = '#BDBDBD';
let click_color__D = 'white';

// Set color based on darkTheme on or off.
let focus_color = isDarkThemeOn ? focus_color__D : focus_color__L;
let border_color = isDarkThemeOn ? border_color__D : border_color__L;
let click_color = isDarkThemeOn ? click_color__D : click_color__L;

const CssTextField = withStyles({
  root: {
    // NOT USED HERE
    // '& label.Mui-focused': {
    //   color: focus_color,
    // },
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: 'green',
    // },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: border_color,
      },
      '&:hover fieldset': {
        borderColor: focus_color,
      },
      '&.Mui-focused fieldset': {
        borderColor: click_color,
      },
    },
  },
})(TextField);

const ToDoForm = () => {
  let toDo;

  const handleSubmit = event => {
    event.preventDefault();
    // Get entry in the toDo input
    toDo = document.getElementById('description_input').value;

    // If there is an toDo entered - dispatch the addToDo action
    if (toDo) {
      store.dispatch(addToDo(toDo));
      // clear the content from the input element & clear the toDo local var.
      document.getElementById('toDoForm').reset();
      toDo = null;
    }
  };

  // Currently not being used as onChange on input wasn't firing for a duplicate value.
  // const handleToDo = event => {
  //   const { value } = event.target;
  //   // If there is an toDo entered -store here.
  //   toDo = value;
  // };

  return (
    <form onSubmit={handleSubmit} id="toDoForm">
      <CssTextField
        id="description_input"
        size="small"
        variant="outlined"
        name="toDo"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CreateTwoTone />
            </InputAdornment>
          ),
        }}
      ></CssTextField>

      <Button
        className="description_submit"
        type="submit"
        variant="contained"
        color="primary"
      >
        +
      </Button>
    </form>
  );
};

export default ToDoForm;
