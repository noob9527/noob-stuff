import React from 'react';
import { Heading } from 'spectacle';

export default (props) => {
  const def = {
    size: 5,
    textColor: 'grey',
    textSize: '50px',
  };

  return (
    <Heading {...def} {...props}>{props.children}</Heading>
  );
};
