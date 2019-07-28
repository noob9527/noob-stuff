import React from 'react';
import { Heading } from 'spectacle';

export default (props) => {
  const def = {
    size: 4,
    textColor: 'wheat',
    textSize: '80px',
    margin: '35px',
  };

  return (
    <Heading {...def} {...props}>{props.children}</Heading>
  );
};
