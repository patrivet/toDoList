import * as actions from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

/*
  Action 1: AddToDo: this func returns an object,
  with a type and payload -with desc (isComplete is initialised in the reducer).
*/
export const addToDo = description => ({
  type: actions.ADD_TODO, // Past tense could instead be used: "TO_DO_ADDED"
  id: uuidv4(),
  payload: {
    description,
  },
});

export const toggleToDo = id => ({
  type: actions.TOGGLE_TODO,
  payload: {
    id,
  },
});

export const filterToDos = filter => ({
  type: actions.TOGGLE_FILTER,
  payload: {
    filter,
  },
});

export const searchToDos = searchText => ({
  type: actions.SEARCH_TODOS,
  payload: {
    searchText,
  },
});

export const toggleColorTheme = toggleSetting => ({
  type: actions.TOGGLE_COLOR_THEME,
  payload: {
    toggleSetting,
  },
});

export const addToDos = todos => ({
  type: actions.ADD_TODOS,
  payload: {
    todos,
  },
});
