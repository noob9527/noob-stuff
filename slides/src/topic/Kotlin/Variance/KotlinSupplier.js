import React from 'react';
import { Slide } from 'spectacle';
import DefaultCodePane from '../components/DefaultCodePane';

import H4 from '../components/H4';

const kotlinCode = `
// No need for anything
// Supplier<String> is always a Supplier<Object>
val supplier: Supplier<String> = Supplier {
    "hello world"
}
Console.debug(supplier)
`.trim();

export default () => (
  <Slide maxHeight="90%" maxWidth="55vw">
    <H4>Kotlin Variance</H4>
    {DefaultCodePane({
      lang: 'kotlin',
      source: kotlinCode,
      style: {
        minWidth: 0,
        maxWidth: 'unset',
        margin: 10,
        fontSize: '25px',
      },
    })}
  </Slide>
);

// declare-site variance
// use-site variance

