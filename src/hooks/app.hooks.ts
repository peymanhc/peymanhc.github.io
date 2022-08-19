// Hooks
import { useDispatch } from "react-redux";
// Actions
import AppActions from "store/app/app.actions";

function useApp() {
  const dispatch = useDispatch();
  function isMobileView(value: boolean) {
    const action = AppActions.isMobileView(value);
    dispatch(action);
  }
  return {
    isMobileView,
  };
}

export default useApp;
