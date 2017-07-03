import React from 'react';
import Page from '../../../share/Page/Page';
import image from './the-good-parts.jpeg';

const style = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${image})`,
    backgroundSize: '100% 100%',
};

export default () => (
  <Page>
    <div style={style} />
  </Page>
    );
