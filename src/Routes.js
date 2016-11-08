import React from 'react';
import { browserHistory, Router, Route } from 'react-router';
import { Home } from './views';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
  </Router>
);
