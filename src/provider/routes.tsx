import React, { Suspense, useEffect } from "react";
import {
  Switch,
  Route,
  withRouter,
  Redirect,
  useLocation,
} from "react-router-dom";
import { SHOULD_NOT_AUTH, SHOULD_AUTH } from "config/enums";
import { read } from "storage";
import Login from "pages/auth/login";

const Router = ({ pages, setLocation }: any) => {
  const token = read("token");
  const location = useLocation();
  useEffect(() => {
    const page = pages.find((page: any) => page.path === location.pathname);
    setLocation(page.layout);
  }, [location]);

  return (
    <Suspense fallback={<>loading ...</>}>
      <Switch>
        {pages.map((route: any, key: number) =>
          route.guard === SHOULD_NOT_AUTH ? (
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
          ) : token ? (
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
          ) : (
            <Route
            exact
            path={"/auth/login"}
            component={() => {
              document.title = "Authenticated";
              return <Login />;
            }}
          />
          )
        )}
      </Switch>
    </Suspense>
  );
};

export default withRouter(Router);
