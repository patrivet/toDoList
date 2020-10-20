import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers/toDos';
// Logger with default options
import logger from 'redux-logger';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__() &&
    applyMiddleware(logger)
);

export default store;
