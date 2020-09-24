const initialState = {toDos: []}; // What should init state be?

/* Note:
  The reducer is the place for business logic
  so values outside the payload, isComplete init to false.. etc
  are set here.
*/
function reducer (state = initialState, action) {

  console.log(`INFO: reducer: action =${action.type}`);
  switch (action.type) {
    case 'TO_DO_ADDED':
      return {
        ...state,
        toDos: [
          ...state.toDos,
          {
            description: action.payload.description,
            isComplete: false
          }
        ]
      }

    // All other action types - return state/store
    default: return state;
  }
}

export default reducer;