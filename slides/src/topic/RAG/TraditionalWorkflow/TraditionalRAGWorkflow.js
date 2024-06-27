import React from 'react';
import { Slide, Image, Heading } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';

import image from '../traditional-rag-workflow.png';
import H4 from '../../Kotlin/components/H4';

preloader({
  image,
});

export default () => (
  // <Slide bgImage={image} bgSize="contain" />
  <Slide maxWidth="90vw" maxHeight="90%">
    {/* <Heading size={3} textColor="wheat" fit={false}>Traditional RAG workflow</Heading> */}
    <H4>Traditional RAG workflow</H4>
    <Image src={image} height="80%" width="80%" />
  </Slide>
);
