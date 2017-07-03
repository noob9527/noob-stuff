import { createStore, applyMiddleware, compose } from 'redux';
import trunk from 'redux-thunk';

import reducer from './reducers';

export default function configureStore(initialState) {
    return createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(trunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),   //eslint-disable-line
        ),
    );
}
