import React from 'react';

import { Deck } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

import Page10 from './Page10';
import Page20 from './Page20';
import Page23 from './Page23';
import Page26 from './Page26';
import Page30 from './Page30';
import Page40 from './Page40';
import Page45 from './Page45';
import Page50 from './Page50';
import Page60 from './Page60';
import Page65 from './Page65';
import Page70 from './Page70';
import Page72 from './Page72';
import Page74 from './Page74';
import Page76 from './Page76';
import Page78 from './Page78';
import Page79 from './Page79';
import Page80 from './Page80';
import Page82 from './Page82';

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

const Topic1 = () => (
  <Deck
    transition={['fade']}
    transitionDuration={500}
    theme={theme}
    progress={progress}
    controls={controls}
  >
    {Page10()}
    {Page20()}
    {Page23()}
    {Page26()}
    {Page30()}
    {Page40()}
    {Page45()}
    {Page50()}
    {Page60()}
    {Page65()}
    {Page70()}
    {Page72()}
    {Page74()}
    {Page76()}
    {Page78()}
    {Page79()}
    {Page80()}
    {Page82()}
  </Deck>
);

export default Topic1;
