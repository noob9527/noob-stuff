import React from 'react';
import { Router, Route } from 'react-router';

import history from './history';

import Nav from '../share/Nav';

import Javascript from '../topic/Javascript/Javascript';

export default () => (
  <Router history={history}>
    <Route path="/" component={Nav} />
    <Route path="/javascript" component={Javascript} />
  </Router>
    );
