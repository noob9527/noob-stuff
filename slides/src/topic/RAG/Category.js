import React from 'react';
import {
  Appear, Heading, List, ListItem, Slide,
} from 'spectacle';


export default () => (
  <Slide>
    <Heading style={{ margin: '0 0 60px 0' }}>Application</Heading>
    <Appear>
      <List>
        <ListItem>Access Private Data</ListItem>
        <ListItem>Crawl Webpage</ListItem>
        <ListItem>Invoke Web API</ListItem>
        <ListItem>Call Customized Function</ListItem>
      </List>
    </Appear>
  </Slide>
);
