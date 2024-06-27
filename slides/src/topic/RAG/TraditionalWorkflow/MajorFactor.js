import React from 'react';
import {
  Appear, Heading, List, ListItem, Slide,
} from 'spectacle';


export default () => (
  <Slide>
    <Heading style={{ margin: '0 0 60px 0' }}>Major factors</Heading>
    <Appear>
      <List>
        <ListItem>Retrieval - 召回率</ListItem>
        <ListItem>The Ability of LLM - 准确率</ListItem>
      </List>
    </Appear>
  </Slide>
);
