import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import App from '../components/App';
import AdminPanel from '../components/AdminPanel'

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path='/' component={App} exact={true}/>
        <Route path='/admin' component={AdminPanel}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
