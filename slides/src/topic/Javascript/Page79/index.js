import React from 'react';
import {
    Slide,
    CodePane,
    Appear,
    Layout,
    Fill,
    Heading,
} from 'spectacle';

import addFunction from './addFunction.example';
import bindAddFunction from './bindAddFunction.example';

export default () => (
  <Slide>
    <Heading fit>Function.prototype.bind</Heading>
    <Layout>
      <Fill>
        <Appear>
          {code(addFunction)}
        </Appear>
      </Fill>
    </Layout>
    <Layout>
      <Fill>
        <Appear>
          {code(bindAddFunction)}
        </Appear>
      </Fill>
    </Layout>
  </Slide>
    );

function code(source) {
  const styles = {
    minWidth: 0,
    margin: '20px auto !important',
  };

  return (
    <CodePane lang="javascript" source={source} style={styles} />
  );
}
