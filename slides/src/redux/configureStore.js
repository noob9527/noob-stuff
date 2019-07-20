import { createStore, applyMiddleware, compose } from 'redux';
import trunk from 'redux-thunk';

import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //eslint-disable-line

export default function configureStore(initialState) {
  return createStore(
        reducer,
        initialState,
        composeEnhancers(
            applyMiddleware(trunk),
        ),
    );
}
