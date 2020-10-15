import React from 'react';
import store from '../../store';
import { toggleColorTheme } from '../../actions';
import { useSelector } from 'react-redux';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { getColor } from '../../config/ColorVariables';
import './ColorThemeToggle.css';

const ColorThemeToggle = () => {
  let isLightThemeOn = useSelector(state => state.isLightThemeOn);
  const primary_color = getColor('primary_color', isLightThemeOn);

  const PurpleSwitch = withStyles({
    switchBase: {
      color: primary_color,
      '&$checked': {
        color: primary_color,
      },
      '&$checked + $track': {
        backgroundColor: primary_color,
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const handleChange = () => {
    store.dispatch(toggleColorTheme(!isLightThemeOn));
    // Toggle the dark-theme css class on the root component
    document.querySelector('body').classList.toggle('dark-theme');
  };

  return (
    <div className="toggleContainer">
      <FormControlLabel
        control={
          <PurpleSwitch
            /* Note: using the ! below as Switch is checked when dark theme is on (i.e. when lightTheme is false)*/
            checked={!isLightThemeOn}
            onChange={handleChange}
            color="primary"
          />
        }
        label={`${isLightThemeOn ? 'Enable' : 'Disable'} Dark mode`}
      />
    </div>
  );
};

export default ColorThemeToggle;
