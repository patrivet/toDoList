import React from 'react';
import './ToDoForm.css';
import store from '../../store';
import { addToDo } from '../../actions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CreateTwoTone from '@material-ui/icons/CreateTwoTone';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../config/ColorVariables';

const CssTextField = withStyles({
  root: {
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
