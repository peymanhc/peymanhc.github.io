import Login from "pages/auth/login";
import NotFound from "pages/not-found";
import React, { Suspense, useEffect } from "react";
import {
  Switch,
  Route,
  withRouter,
  useLocation,
} from "react-router-dom";
import { read } from "storage";
const Router = ({ pages, setLocation }: any) => {
  const token = read("token");
  const location = useLocation();
  useEffect(() => {
    const page = pages.find((page: any) => page.path === location.pathname);
    setLocation(token && page?.path === undefined ? true : token && page?.layout);
  }, [location]);

  return (
    <Suspense fallback={<div/>}>
      <Switch>
        {!token && location?.pathname === "/auth/login" ? (
          <Login />
        ) : token ? (
          pages.map((route: any, key: number) => (
            <Route
              key={key}
              exact={route.exact}
              path={route.path}
              component={() => {
                document.title = `${route.title}`;
                const Page = route.render();
                return <Page />;
              }}
            />
          ))
        ) : (
          <NotFound />
        )}
      </Switch>
    </Suspense>
  );
};

export default withRouter(Router);
