import * as actions from '../actions/actionTypes';
const initialState = { toDos: [] };

/* Note:
  The reducer is the place for business logic
  so values outside the payload, isComplete init to false.. etc
  are set here.
*/
function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TODO:
      return {
        ...state,
        toDos: [
          ...state.toDos,
          {
            id: action.id,
            description: action.payload.description,
            isComplete: false,
          },
        ],
      };

    case actions.TOGGLE_TODO:
      // return the updated state (ie. an array)
      // with one member's complete flag toggled.
      return {
        ...state,
        toDos: state.toDos.map(toDo =>
          toDo.id === action.payload.id
            ? { ...toDo, isComplete: !toDo.isComplete }
            : toDo
        ),
      };

    // All other action types - return state/store
    default:
      return state;
  }
}

let state = {
  toDos: [
    {
      id: 0,
      description: 'Cook dinner',
      isComplete: false,
    },
    {
      id: 0,
      description: 'Drink wine',
      isComplete: false,
    },
  ],
};

export default reducer;
