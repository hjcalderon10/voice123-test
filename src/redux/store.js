import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './root-reducer';

const initialState = {};
const middleware = [thunk];

window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const isDevMode =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const store = isDevMode
  ? createStore(
      rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(...middleware)),
    )
  : createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;
