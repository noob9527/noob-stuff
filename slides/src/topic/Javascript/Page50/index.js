import React from 'react';
import { Slide, Heading, List, ListItem, Appear } from 'spectacle';

export default () => (
  <Slide>
    <Heading fit>Programming Paradigm</Heading>
    <List>
      <Appear>
        <ListItem>procedural programming</ListItem>
      </Appear>
      <Appear>
        <ListItem>functional programming</ListItem>
      </Appear>
      <Appear>
        <ListItem>object oriented</ListItem>
      </Appear>
    </List>
  </Slide>
    );
