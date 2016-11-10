import React from 'react';
import { browserHistory, IndexRoute, Router, Route } from 'react-router';
import { Home, Layout } from './views';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home} />
    </Route> 
  </Router>
);
