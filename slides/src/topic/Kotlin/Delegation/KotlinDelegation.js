import React from 'react';
import CodeSlide from 'spectacle-code-slide';

import example from './kotlin-delegation.example';

export default () => (
  <CodeSlide
    maxHeight="90vh"
    maxWidth="90vw"
    lang="kotlin"
    fit={false}
    textSize="38px"
    code={example}
    ranges={[
      { loc: [0, 17], title: 'Kotlin Delegation' },
      { loc: [0, 3] },
      { loc: [7, 11] },
      { loc: [12, 16] },
    ]}
  />
);
