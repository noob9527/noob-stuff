import React from 'react';
import {
  Appear, Heading, List, ListItem, Slide,
} from 'spectacle';


export default () => (
  <Slide>
    <Heading style={{ margin: '0 0 60px 0' }}>Why Kotlin?</Heading>
    <Appear>
      <List>
        <ListItem>Less Bug</ListItem>
        <ListItem>Less Code</ListItem>
        <ListItem>Higher Readability</ListItem>
        <ListItem>Better Coding Experience</ListItem>
      </List>
    </Appear>
  </Slide>
);
