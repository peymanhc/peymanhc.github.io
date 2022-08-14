import React, { Suspense } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { SHOULD_NOT_AUTH, SHOULD_AUTH } from "config/enums";
import { read } from "storage";

const Router = (props: any) => {
  const { pages } = props;
  const token = read("token");

  return (
    <Suspense fallback={<>loading ...</>}>
      <Switch>
        {pages.map((route: any) =>
          route.guard === SHOULD_NOT_AUTH ? (
            <Route
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
              exact={route.exact}
              path={route.path}
              component={() => {
                document.title = `${route.title}`;
                const Page = route.render();
                return <Page />;
              }}
            />
          ) : (
            <Redirect to="/auth/login" />
          )
        )}
      </Switch>
    </Suspense>
  );
};

export default withRouter(Router);
