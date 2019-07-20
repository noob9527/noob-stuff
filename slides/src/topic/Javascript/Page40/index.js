import React from 'react';
import {
    Slide,
    List,
    ListItem,
    Appear,
} from 'spectacle';

export default () => (
  <Slide>
    <List>
      <ListItem>statically typed vs dynamically typed</ListItem>
      <Appear>
        <ListItem>strongly typed vs weakly typed</ListItem>
      </Appear>
    </List>
  </Slide>
);
