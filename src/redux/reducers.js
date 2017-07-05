import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = {
    routing,
};

export default combineReducers(rootReducer);
