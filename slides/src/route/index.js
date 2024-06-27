import React from 'react';
import { Router, Route } from 'react-router';

import history from './history';

import Nav from '../share/Nav';

import Javascript from '../topic/Javascript/Javascript';
import Kotlin from '../topic/Kotlin/Kotlin';
import RAG from '../topic/RAG/RAG';


export default () => (
  <Router history={history}>
    <Route path="/" component={Nav} />
    <Route path="/javascript" component={Javascript} />
    <Route path="/kotlin" component={Kotlin} />
    <Route path="/RAG" component={RAG} />
  </Router>
    );
