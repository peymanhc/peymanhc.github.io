import { createBrowserHistory } from 'history';
//Utilities
import qs from 'qs';

const history = createBrowserHistory();
history.location = {
  ...history.location,
  //@ts-ignore
  query: qs.parse(history.location.search.substr(1)),
  state: {},
};
history.listen(() => {
  history.location = {
    ...history.location,
    //@ts-ignore
    query: qs.parse(history.location.search.substr(1)),
    state: history.location.state || {},
  };
});

export const getRedirectPath = (router = window) =>
  encodeURIComponent(`${router.location.pathname}${router.location.search}`);
export const { go, goBack, push, replace } = history;

export default history;
