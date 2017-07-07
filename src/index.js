import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

import './index.css';
import store from './redux/store';
import routes from './route';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    {routes()}
  </Provider>,
    document.getElementById('root'),
);

registerServiceWorker();

export default history;
