import { combineReducers } from 'redux';

import customSliderReducer, * as customSliderActionCreator from '../../share/CustomSlider/CustomSliderRedux';

export default combineReducers({
    customSliderReducer,
});

export { customSliderActionCreator };
