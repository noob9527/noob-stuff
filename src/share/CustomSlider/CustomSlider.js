import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './CustomSlider.less';


class CustomSlider extends React.Component {
    componentWillReceiveProps(nextProps) {
        const { currentIndex } = nextProps;
        this.slider.slickGoTo(currentIndex);
    }

    render() {
        const { children, changeSlide } = this.props;
        const settings = {
            arrows: false,
            infinite: false,
            afterChange: current => changeSlide(current),
        };

        return (
          <Slider ref={(c) => { this.slider = c; }} {...settings} className={styles.topicContainer}>
            {children.map((child, i) => child.type === 'div'
                    ? child
                    : (<div key={i}>{child}</div>))}
          </Slider>
        );
    }
}

export default CustomSlider;
