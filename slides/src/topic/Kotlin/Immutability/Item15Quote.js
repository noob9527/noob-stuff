import React from 'react';

import { BlockQuote, Cite, Quote, Slide } from 'spectacle';

const quote1 = "Classes should be immutable unless there's a very good reason to make them mutable";
const quote2 = 'If a class can not be made immutable, limit its mutability as much as possible';

const styles = {
  // display: 'block',
};

export default () => (
  <Slide bgColor="black" transition={['slide']}>
    <BlockQuote style={styles}>
      <Quote textColor="#b58900" textSize="1.5em">{quote1}</Quote>
      <Cite textAlign="right" textColor="#93a1a1">Effective 2nd, Item28</Cite>
    </BlockQuote>
    <BlockQuote style={{ ...styles, margin: '80px 20px 20px 20px' }}>
      <Quote textColor="#b58900" textSize="1.5em">{quote2}</Quote>
      <Cite textAlign="right" textColor="#93a1a1">Effective 2nd, Item28</Cite>
    </BlockQuote>
  </Slide>
);
