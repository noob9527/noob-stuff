import React from 'react';
import { Appear, Fit, Layout, Slide } from 'spectacle';
import H5 from '../components/H5';
import DefaultCodePane from '../components/DefaultCodePane';
import H4 from '../components/H4';

const javaSingleton = `
public enum Elvis {
    INSTANCE;
    // properties
    // methods
}
`.trim();

const kotlinSingleton = `
object Elvis {
    // properties
    // methods
}
`.trim();


export default () => (
  <Slide maxWidth="90vw" maxHeight="90%">
    <H4>Singleton</H4>
    <Layout style={{ justifyContent: 'space-around' }}>
      <Fit style={{ flexBasis: '40%' }}>
        <Appear>
          <div>
            <H5>Java</H5>
            {DefaultCodePane({ lang: 'java', source: javaSingleton })}
          </div>
        </Appear>
      </Fit>
      <Fit style={{ flexBasis: '45%' }}>
        <Appear>
          <div>
            <H5>Kotlin</H5>
            {DefaultCodePane({ lang: 'kotlin', source: kotlinSingleton })}
          </div>
        </Appear>
      </Fit>
    </Layout>
  </Slide>
);

