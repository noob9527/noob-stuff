import React from 'react';
import { Router, Route } from 'react-router';

import history from './history';

import Nav from '../share/Nav';

import Topic1 from '../topic/Topic1/Topic1';

export default () => (
  <Router history={history}>
    <Route path="/" component={Nav} />
    <Route path="/topic1" component={Topic1} />
  </Router>
    );
