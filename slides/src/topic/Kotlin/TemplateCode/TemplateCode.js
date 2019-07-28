import React from 'react';
import { Slide } from 'spectacle';
import DefaultCodePane from '../components/DefaultCodePane';

import javaCode from './java-code.example';
import H4 from '../components/H4';

export default () => (
  <Slide maxHeight="90%">
    <H4>Template Code</H4>
    {DefaultCodePane({
      lang: 'java',
      source: javaCode,
      style: {
        minWidth: 0,
        maxWidth: 'unset',
        margin: 10,
        fontSize: '21px',
      },
    })}
  </Slide>
);
