import React from 'react';
import { Slide } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';

import image from './the-good-parts.jpeg';

preloader({
    image,
});

export default () => (
  <Slide bgImage={image} />
    );
