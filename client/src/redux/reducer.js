import * as actions from './actionTypes';
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
            description: action.payload.description,
            isComplete: false,
          },
        ],
      };

    // All other action types - return state/store
    default:
      return state;
  }
}

export default reducer;
