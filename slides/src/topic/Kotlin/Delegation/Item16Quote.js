import React from 'react';

import { BlockQuote, Cite, Quote, Slide } from 'spectacle';

const quote1 = 'Unlike method invocation, inheritance violates encapsulation';

const styles = {
  // display: 'block',
};

export default () => (
  <Slide bgColor="black" transition={['slide']}>
    <BlockQuote style={styles}>
      <Quote textColor="#b58900" textSize="1.5em">{quote1}</Quote>
      <Cite textAlign="right" textColor="#93a1a1">Effective 2nd, Item16</Cite>
    </BlockQuote>
  </Slide>
);
