import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CustomSlider from '../../share/CustomSlider/CustomSlider';
import { customSliderActionCreator } from './Topic1Redux';

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';

@connect(
    state => ({
        customSliderReducer: state.topic1.customSliderReducer,
    }),
    dispatch => ({
        customSliderActionCreator: bindActionCreators(customSliderActionCreator, dispatch),
    }),
)
class Topic1 extends React.Component {
    render() {
        return (
          <CustomSlider
            {...this.props.customSliderReducer}
            {...this.props.customSliderActionCreator}
          >
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
            <Page5 />
          </CustomSlider>
        );
    }
}

export default Topic1;
