import React from 'react';
import { Slide, Image, Appear } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';

import gif from './kotlin-group-by.gif';
import H4 from '../components/H4';

preloader({
  image: gif,
});

export default () => (
  <Slide>
    <H4>Collection Operation</H4>
    <Appear>
      <Image src={gif} />
    </Appear>
  </Slide>
    );
