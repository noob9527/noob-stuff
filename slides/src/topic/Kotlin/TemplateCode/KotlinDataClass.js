import React from 'react';
import { Fit, Layout, Slide } from 'spectacle';
import DefaultCodePane from '../components/DefaultCodePane';

import javaCode from './java-code.example';
import kotlinCode from './kotlin-code.example';
import H5 from '../components/H5';


export default () => (
  <Slide maxWidth="90vw" maxHeight="90%">
    <Layout style={{ justifyContent: 'space-around' }}>
      <Fit style={{ flexBasis: '40%' }}>
        <H5>Java POJO</H5>
        {DefaultCodePane({ lang: 'java', source: javaCode })}
      </Fit>
      <Fit style={{ flexBasis: '45%' }}>
        <H5>Kotlin Equivalent</H5>
        {DefaultCodePane({ lang: 'kotlin', source: kotlinCode })}
      </Fit>
    </Layout>
  </Slide>
);
