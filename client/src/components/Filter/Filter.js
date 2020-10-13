import React, { useState } from 'react';
import store from '../../store';
import { filterToDos } from '../../actions';
import { useSelector } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import './Filter.css';

const Filter = () => {
  let filterState = useSelector(state => state.filter);

  const handleLabelClick = event => {
    store.dispatch(filterToDos(event.target.value));
  };

  return (
    <div className="filterContainer">
      <FormControl component="fieldset">
        <FormLabel component="legend">Show</FormLabel>
        <RadioGroup
          row
          aria-label="display"
          name="displays"
          value={filterState}
          onChange={handleLabelClick}
        >
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel
            value="complete"
            control={<Radio />}
            label="Complete"
          />
          <FormControlLabel
            value="incomplete"
            control={<Radio />}
            label="Incomplete"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Filter;
