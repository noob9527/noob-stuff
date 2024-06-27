import React from 'react';

import { Deck, Heading, Slide } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

import 'prismjs/components/prism-java';
import 'prismjs/components/prism-kotlin';

import Why from './Why';
import Category from './Category';
import How from './How';
import TraditionalRAGWorkflow from './TraditionalWorkflow/TraditionalRAGWorkflow';
import MajorFactor from './TraditionalWorkflow/MajorFactor';

const theme = createTheme({
  primary: 'black',
  secondary: 'wheat',
}, {
  primary: 'Helvetica',
});

const controls = process.env.NODE_ENV === 'production';
const progress = process.env.NODE_ENV === 'production'
  ? 'pacman'
  : 'none';

const RAG = () => (
  <Deck
    transition={['fade']}
    transitionDuration={500}
    theme={theme}
    progress={progress}
    controls={controls}
  >
    <Slide><Heading>RAG</Heading></Slide>
    {Why()}
    <Slide><Heading size={2} textColor="wheat" fit={false}>Is RAG still needed?</Heading></Slide>
    {Category()}
    {How()}
    {TraditionalRAGWorkflow()}
    {MajorFactor()}
  </Deck>
);

export default RAG;

