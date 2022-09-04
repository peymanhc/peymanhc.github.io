/**
 * @module Actions/UserSettings
 * @desc All user actions
 */

import * as types from './app.constants';

class Actions {
  isMobileView(value: any) {
    return {
      type: types.ISMOBILE,
      payload: value,
    };
  }
  themeColor(value: any) {
    return {
      type: types.THEME_COLOR,
      payload: value,
    };
  }
}

const AppActions = new Actions();

export default AppActions;
