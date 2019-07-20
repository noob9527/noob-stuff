import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from '../redux/store';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store);

export default history;
