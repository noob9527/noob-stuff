import React from 'react';
import { Appear, Fit, Layout, Slide } from 'spectacle';
import DefaultCodePane from '../components/DefaultCodePane';
import H5 from '../components/H5';
import H4 from '../components/H4';

const javaImmutable = `
public final class Sample {
    private final String field1;
    private final Boolean field2;
    private final Integer field3;
    private final Float field4;
    private final Double field5;

    public Sample(
        String field1,
        Boolean field2,
        Integer field3,
        Float field4,
        Double field5
    ) {
        this.field1 = field1;
        this.field2 = field2;
        this.field3 = field3;
        this.field4 = field4;
        this.field5 = field5;
    }
    // getter is omitted
}
`.trim();

const workWithIt = `
// create a new instance
Sample sample1 = new Sample("", true, 0, 0f, 0d);

// change field then create a new instance
Sample sample2 = new Sample(
    sample1.getField1(),
    false,
    sample1.getField3(),
    sample1.getField4(),
    sample1.getField5()
);
`.trim();

export default () => (
  <Slide maxHeight="90vh" maxWidth="90vw">
    <H4>Java Immutability</H4>
    <Layout style={{ justifyContent: 'space-around' }}>
      <Fit style={{ flexBasis: '45%' }}>
        <Appear>
          <div>
            <H5>Create an immutable class</H5>
            {DefaultCodePane({
              lang: 'java',
              source: javaImmutable,
              style: {
                minWidth: 0,
                maxWidth: 'unset',
                margin: 10,
                fontSize: '15px',
              },
            })}
          </div>
        </Appear>
      </Fit>
      <Fit style={{ flexBasis: '45%' }}>
        <Appear>
          <div>
            <H5>Work with that class</H5>
            {DefaultCodePane({
              lang: 'java',
              source: workWithIt,
              style: {
                minWidth: 0,
                maxWidth: 'unset',
                margin: 10,
                fontSize: '21px',
              },
            })}
          </div>
        </Appear>
      </Fit>
    </Layout>
  </Slide>
);

