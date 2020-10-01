import * as actions from './actionTypes';
let nextId = 0;

/*
  Action 1: AddToDo: this func returns an object,
  with a type and payload -with desc (isComplete is initialised in the reducer).
*/
export const addToDo = description => ({
  type: actions.ADD_TODO, // ? past tense could instead be used: "TO_DO_ADDED"
  id: nextId++,
  payload: {
    description,
  },
});

export const toggleToDo = id => {
  return {
    type: actions.TOGGLE_TODO,
    payload: {
      id,
    },
  };
};
