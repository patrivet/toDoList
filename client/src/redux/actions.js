import * as actions from './actionTypes';

/*
  Action 1: AddToDo: this func returns an object,
  with a type and payload(desc & isComplete)
*/
export const addToDo = (description) => ({
  type: actions.ADD_TODO, // ? past tense could instead be used: "TO_DO_ADDED"
  payload: {
    description,
  },
});