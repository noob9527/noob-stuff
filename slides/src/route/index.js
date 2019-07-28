import React from 'react';
import { Router, Route } from 'react-router';

import history from './history';

import Nav from '../share/Nav';

import Javascript from '../topic/Javascript/Javascript';
import Kotlin from '../topic/Kotlin/Kotlin';


export default () => (
  <Router history={history}>
    <Route path="/" component={Nav} />
    <Route path="/javascript" component={Javascript} />
    <Route path="/kotlin" component={Kotlin} />
  </Router>
    );
