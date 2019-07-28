import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import spectacle from 'spectacle/lib/reducers/index';

const rootReducer = {
  routing,
  spectacle,
};

export default combineReducers(rootReducer);
