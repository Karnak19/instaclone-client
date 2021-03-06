import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Layout from './layout';
import Home from './components/Home';
import User from './components/User';

function AuthRoute({ component: Component, ...rest }) {
  const token = useSelector((state) => state.token);
  const isAuth = useSelector((state) => state.isAuth);

  return isAuth && token ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect to="/" />
  );
}

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <AuthRoute path="/:username" component={User} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
export default Router;
