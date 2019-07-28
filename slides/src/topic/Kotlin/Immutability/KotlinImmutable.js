import React from 'react';
import { Appear, Fit, Layout, Slide } from 'spectacle';
import DefaultCodePane from '../components/DefaultCodePane';
import H5 from '../components/H5';
import H4 from '../components/H4';

const kotlinImmutable = `
data class Sample(
    val field1: String = "",
    val field2: Boolean = false,
    val field3: Int = 0,
    val field4: Float = 0f,
    val field5: Double? = null
)
`.trim();

const workWithIt = `
// create a new instance
// following code are all valid
val sample1 = Sample(
    field1 = "foo",
    field2 = true,
    field3 = 1,
    field4 = 1f,
    field5 = 1.0
)
val sample2 = Sample(field2 = true)
val sample3 = Sample()

// change field then create a new instance(copy)
val sample4 = sample3.copy(field2 = true, field3 = 2)
`.trim();

export default () => (
  <Slide maxHeight="90vh" maxWidth="90vw">
    <H4>Kotlin Immutability</H4>
    <Layout style={{ justifyContent: 'space-around' }}>
      <Fit style={{ flexBasis: '45%' }}>
        <Appear>
          <div>
            <H5>Create an immutable class</H5>
            {DefaultCodePane({
              lang: 'kotlin',
              source: kotlinImmutable,
              style: {
                minWidth: 0,
                maxWidth: 'unset',
                margin: 10,
                fontSize: '25px',
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
              lang: 'kotlin',
              source: workWithIt,
              style: {
                minWidth: 0,
                maxWidth: 'unset',
                margin: 10,
                fontSize: '25px',
              },
            })}
          </div>
        </Appear>
      </Fit>
    </Layout>
  </Slide>
);

