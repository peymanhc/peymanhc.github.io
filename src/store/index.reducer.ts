import { combineReducers } from 'redux';
// Reducers

export interface Action<P = any> {
  type: string;
  payload?: P;
}

export interface ExtraActionInfo {
  sagas: boolean | undefined;
}

// Combine all reducers together to control by redux reducers observer.
const rootReducer = combineReducers({

});
export default rootReducer;
