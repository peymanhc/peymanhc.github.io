import { combineReducers } from 'redux';
// Reducers
import appConfig, { AppConfig } from './app/app.reducer';

export interface Action<P = any> {
  type: string;
  payload?: P;
}

export interface StateNetwork {
  appConfig: AppConfig;
}

export interface ExtraActionInfo {
  sagas: boolean | undefined;
}

// Combine all reducers together to control by redux reducers observer.
const rootReducer = combineReducers({
  appConfig
});
export default rootReducer;
