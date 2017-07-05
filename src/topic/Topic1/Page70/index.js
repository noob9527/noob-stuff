import React from 'react';
import { Slide, Heading } from 'spectacle';

export default () => (
  <Slide><Heading fit>closure and scope</Heading></Slide>
    );

// TODO
// bound variables vs free variables
// dynamic scoping vs lexical scoping
// {
//     func: 'function addx(y){return x+y}',
//     scope: {
//         x: 1,
//     },
// };
