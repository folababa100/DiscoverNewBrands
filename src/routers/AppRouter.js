import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import App from '../components/App';
import AdminPanel from '../components/AdminPanel';
import LoginPageAdmin from '../components/LoginPageAdmin';
import ContactPage from '../components/ContactPage';
import AboutPage from '../components/AboutPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path='/' component={App} exact={true}/>
        <Route path="/contact-us" component={ContactPage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path='/admin' component={AdminPanel} exact={true}/>
        <Route path='/admin/login' component={LoginPageAdmin}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
