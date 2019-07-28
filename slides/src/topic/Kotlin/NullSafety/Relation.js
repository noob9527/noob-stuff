import React from 'react';
import { Appear, Heading, Image, Slide, Layout, Fit } from 'spectacle';

import javaNullImage from './java-null-relation.jpg';
import kotlinNullImage from './kotlin-null-relation.jpg';

export default () => (
  <Slide maxWidth="90vw" maxHeight="90%">
    <Layout style={{ justifyContent: 'space-around' }}>
      <Fit>
        <Heading size={4} textColor="wheat" textSize="80px">Java</Heading>
        <Image src={javaNullImage} />
      </Fit>
      <Appear>
        <Fit>
          <Heading size={4} textColor="wheat" textSize="80px">Kotlin</Heading>
          <Image src={kotlinNullImage} />
        </Fit>
      </Appear>
    </Layout>
  </Slide>
);
