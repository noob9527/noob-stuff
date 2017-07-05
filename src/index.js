import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

import './index.css';
import routes from './route';
import configureStore from './redux/configureStore';

import registerServiceWorker from './registerServiceWorker';

// Add the reducer to your store on the `routing` key
const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    {routes(history)}
  </Provider>,
    document.getElementById('root'),
);

registerServiceWorker();
