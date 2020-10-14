import React from 'react';
import store from '../../store';
import { toggleColorTheme } from '../../actions';
import { useSelector } from 'react-redux';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const ColorThemeToggle = () => {
  let colorTheme = useSelector(state => state.colorTheme);

  const handleChange = () => {
    store.dispatch(toggleColorTheme(!colorTheme));
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={state.checkedB}
          onChange={handleChange}
          name="checkedB"
          color="primary"
        />
      }
      label="Primary"
    />
  );
};

export default ColorThemeToggle;
