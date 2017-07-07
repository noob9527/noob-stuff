import React from 'react';
import { Slide, Image } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';

import image from './javascript-everywhere.jpg';

preloader({
    image,
});

export default () => (
  <Slide>
    <Image src={image} />
  </Slide>
    );
