import React from 'react';
import { Slide, CodePane, Text, Layout, Fill } from 'spectacle';

import trap1 from './trap1.example';
import trap2 from './trap2.example';

export default () => (
  <Slide>
    <Layout>
      <Fill>
        <Text textColor="wheat">sample 1</Text>
        {code(trap1)}
      </Fill>
      <Fill>
        <Text textColor="wheat">sample 2</Text>
        {code(trap2)}
      </Fill>
    </Layout>
  </Slide>
    );

function code(source) {
    const styles = {
        minWidth: 0,
        margin: 10,
    };

    return (
      <CodePane lang="javascript" source={source} style={styles} />
    );
}
