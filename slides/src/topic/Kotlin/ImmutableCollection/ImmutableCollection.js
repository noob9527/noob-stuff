import React from 'react';
import { Appear, Fit, Heading, Layout, Slide } from 'spectacle';
import DefaultCodePane from '../components/DefaultCodePane';

const testCase = `
@Test
@DisplayName("mutate a collection")
public void test100() {
    List<Integer> list = Arrays.asList(1, 2);
    list.add(3);
    assertThat(list).hasSize(3);
}
`.trim();

const asList = `
@SafeVarargs
@SuppressWarnings("varargs")
public static <T> List<T> asList(T... a) {
    return new ArrayList<>(a);
}
`.trim();


export default () => (
  <Slide maxWidth="90vw" maxHeight="90%">
    <Heading
      size={2}
      textColor="wheat"
      textSize="100px"
      margin="0 0 60px 0"
    >Immutable Collection</Heading>
    <Appear>
      <div>
        <Layout style={{ justifyContent: 'space-around' }}>
          <Fit style={{ flexBasis: '40%' }}>
            <Heading size={5} textColor="grey" textSize="50px">Arrays.asList</Heading>
            {DefaultCodePane({ lang: 'java', source: asList })}
          </Fit>
          <Fit style={{ flexBasis: '45%' }}>
            <Heading size={5} textColor="grey" textSize="50px">Pass or Not?</Heading>
            {DefaultCodePane({ lang: 'java', source: testCase })}
          </Fit>
        </Layout>
      </div>
    </Appear>
  </Slide>
);

