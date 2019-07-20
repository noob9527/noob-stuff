import React from 'react';
import { Slide, CodePane, Appear, Layout, Fill } from 'spectacle';

import dynamicScoping from './dynamicScoping.example';
import lexicalScoping from './lexicalScoping.example';

export default () => (
  <Slide>
    <Layout>
      <Fill>
        {code(dynamicScoping)}
      </Fill>
    </Layout>
    <Layout>
      <Fill>
        <Appear>
          {code(lexicalScoping)}
        </Appear>
      </Fill>
    </Layout>
  </Slide>
    );

function code(source) {
  const styles = {
    minWidth: '100%',
    margin: '20px auto',
  };

  return (
    <CodePane lang="javascript" source={source} style={styles} />
  );
}
