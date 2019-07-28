import React from 'react';
import { CodePane } from 'spectacle';

export default (props) => {
  const style = {
    minWidth: 0,
    margin: 10,
    fontSize: '25px',
  };

  return (
    <CodePane
      lang={props.lang}
      source={props.source}
      style={props.style || style}
    />
  );
};
