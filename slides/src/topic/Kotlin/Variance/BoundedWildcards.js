import React from 'react';
import { Slide } from 'spectacle';
import DefaultCodePane from '../components/DefaultCodePane';

import H4 from '../components/H4';

const javaCode = `
// Supplier<? extends Object> can be simplified to Supplier<?>
// I left it here to explain the point
public static void log(Supplier<? extends Object> supplier) {
    if (isLogEnabled) {
        System.out.println(supplier.get());
    }
}

// we can now call it with Supplier<String>
void test() {
    Supplier<String> supplier = () -> "hello world";
    Console.log(supplier);
}
`.trim();

export default () => (
  <Slide maxWidth="90vw" maxHeight="90%">
    <H4>Mysterious bounded wildcards</H4>
    {DefaultCodePane({
      lang: 'java',
      source: javaCode,
      style: {
        minWidth: 0,
        maxWidth: 'unset',
        margin: 10,
        fontSize: '25px',
      },
    })}
  </Slide>
);

