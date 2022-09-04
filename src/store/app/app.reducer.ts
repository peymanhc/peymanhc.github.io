/**
 * @module Reducer/User
 * @desc All user reducers
 */
import * as types from "./app.constants";
// Utilities
import { Action } from "store/index.reducer";
import { merge } from "ramda";

export interface AppConfig {
  isMobile: boolean;
  themeColor:string;
}

export const initialState = {
  isMobile: false,
  themeColor:"green",
};

const reducer: React.Reducer<AppConfig, Action> = (
  state = initialState,
  action
) => {
  const update = merge(state);
  switch (action.type) {
    case types.ISMOBILE:
      return update({
        isMobile: action.payload,
      });
    case types.THEME_COLOR:
      return update({
        themeColor: action.payload,
      });
    default:
      return state;
  }
};

export default reducer;
