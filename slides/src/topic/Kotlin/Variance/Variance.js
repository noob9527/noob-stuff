import React from 'react';
import { Appear, Fit, Layout, Slide } from 'spectacle';
import H4 from '../components/H4';
import DefaultCodePane from '../components/DefaultCodePane';

const javaLog = `
public static void log(Supplier<Object> supplier) {
    if (isLogEnabled) {
        System.out.println(supplier.get());
    }
}
`.trim();

const javaInvariance = `
Supplier<String> supplier = () -> "hello world";
// doesn't compile
Console.log(supplier);
// doesn't compile either
Console.log((Supplier<Object>) supplier);
`.trim();

export default () => (
  <Slide>
    <H4>Variance</H4>
    <Layout style={{ justifyContent: 'space-around' }}>
      <Fit style={{ flexBasis: '40%' }}>
        {DefaultCodePane({ lang: 'java', source: javaLog })}
      </Fit>
      <Appear>
        <Fit style={{ flexBasis: '45%' }}>
          {DefaultCodePane({ lang: 'java', source: javaInvariance })}
        </Fit>
      </Appear>
    </Layout>
  </Slide>
);

