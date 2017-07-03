import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import topic1 from '../topic/Topic1/Topic1Redux';

const rootReducer = {
    routing,
    topic1,
};

export default combineReducers(rootReducer);
