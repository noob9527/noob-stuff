import React from 'react';
import { Slide, CodePane, Appear } from 'spectacle';

import sample1 from './sample1.example';
import sample2 from './sample2.example';

export default () => (
  <Slide>
    {code(sample1)}
    <Appear>
      {code(sample2)}
    </Appear>
  </Slide>
    );

function code(source) {
  const styles = {
    minWidth: 0,
    margin: '20px auto',
  };

  return (
    <CodePane lang="javascript" source={source} style={styles} />
  );
}
