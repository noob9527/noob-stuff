import React from 'react';
import { Appear, Heading, List, ListItem, Slide } from 'spectacle';


export default () => (
  <Slide>
    <Heading style={{ margin: '0 0 60px 0' }}>Why?</Heading>
    <List>
      <Appear><ListItem>Latest Data</ListItem></Appear>
      <Appear><ListItem>Private Data</ListItem></Appear>
      <Appear><ListItem>Context Window</ListItem></Appear>
      <Appear><ListItem>Token Price</ListItem></Appear>
    </List>
  </Slide>
);
