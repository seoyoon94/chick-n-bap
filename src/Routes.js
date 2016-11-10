import React from 'react';
import { browserHistory, IndexRoute, Router, Route } from 'react-router';
import { About, Contact, Home, Layout, Menu, Social } from './views';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/menu' component={Menu} />
      <Route path='/social' component={Social} />
    </Route> 
  </Router>
);
