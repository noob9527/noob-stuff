import React from 'react';
import { Slide } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';

import image from '../traditional-rag-workflow.png';

preloader({
  image,
});

export default () => (
  <Slide bgImage={image} bgSize="contain" />
);
