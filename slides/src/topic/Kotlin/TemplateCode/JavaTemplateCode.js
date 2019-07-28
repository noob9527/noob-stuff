import React from 'react';
import { Image, Slide } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';

import image from './java-template-code.png';
import H4 from '../components/H4';

preloader({
  image,
});

export default () => (
  <Slide maxWidth="90vw" maxHeight="90%">
    <H4>After Completion...</H4>
    <Image src={image} height="80%" width="80%" />
  </Slide>
);
