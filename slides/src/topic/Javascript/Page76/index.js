import React from 'react';
import CodeSlide from 'spectacle-code-slide';

import example from './add.example';

export default () => (
  <CodeSlide
    lang="javascript"
    code={example}
    ranges={[
     { loc: [0, 13], title: 'bound vs free' },
     { loc: [0, 3] },
     { loc: [4, 13] },
     { loc: [5, 8] },
     { loc: [6, 7], note: 'x is free, y is bound' },
    ]}
  />
    );
