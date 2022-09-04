// Hooks
import { useDispatch } from "react-redux";
import { store } from "storage";
// Actions
import AppActions from "store/app/app.actions";

function useApp() {
  const dispatch = useDispatch();
  function isMobileView(value: boolean) {
    const action = AppActions.isMobileView(value);
    dispatch(action);
  }
  function changeTheme(value: string) {
    const action = AppActions.themeColor(value);
    store('theme', value);
    dispatch(action);
    window.location.replace("/")
  }
  return {
    isMobileView,
    changeTheme
  };
}

export default useApp;
