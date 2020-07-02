import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Layout from './layout';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/:user" component={User} /> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
export default Router;
