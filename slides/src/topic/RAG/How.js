import React from 'react';
import { Appear, Heading, List, ListItem, Slide } from 'spectacle';


export default () => (
  <Slide>
    <Heading style={{ margin: '0 0 60px 0' }}>How?</Heading>
    <Appear>
      <List>
        <ListItem>Traditional RAG Workflow</ListItem>
        <ListItem>Agentic RAG Workflow</ListItem>
      </List>
    </Appear>
  </Slide>
);
