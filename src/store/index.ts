import { createStore, applyMiddleware, compose } from 'redux';
// Reducers
import reducers from './index.reducer';
// Sagas
import sagas from './index.sagas';
// List of middleware
import middlewares, { sagaMiddleware } from './index.middleware';

// Create store and also apply all middleware such as Redux-devtools and redux-saga and redux-logger in this project
const appStore = createStore(
  reducers,
  compose(applyMiddleware(...middlewares)),
);
// Run redux-saga middleware and apply all forked sagas that we have created
sagaMiddleware.run(sagas);

export default appStore;
