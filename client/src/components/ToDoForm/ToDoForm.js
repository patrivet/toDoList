import React from 'react';
import './ToDoForm.css';
import store from '../../store';
import { addToDo } from '../../actions';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CreateTwoTone from '@material-ui/icons/CreateTwoTone';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';
import { getColor } from '../../config/ColorVariables';

const ToDoForm = () => {
  let toDo;
  const isLightThemeOn = useSelector(state => state.isLightThemeOn);
  const CssTextField = withStyles({
    root: {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: getColor('border_color', isLightThemeOn),
        },
        '&:hover fieldset': {
          borderColor: getColor('hover_color', isLightThemeOn),
        },
        '&.Mui-focused fieldset': {
          borderColor: getColor('click_color', isLightThemeOn),
        },
      },
    },
  })(TextField);

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

  return (
    <form onSubmit={handleSubmit} id="toDoForm">
      <CssTextField
        id="description_input"
        size="small"
        variant="outlined"
        name="toDo"
        autoComplete="off"
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
