import React from 'react';
import { Slide, CodePane, Appear, Text, Layout, Fill } from 'spectacle';
import es5InheritanceExample from './es5Inheritance.example';
import es6InheritanceExample from './es6Inheritance.example';

const styles = {
    minWidth: 0,
    margin: 10,
};
export default () => (
  <Slide>
    <Layout>
      <Fill>
        <Text textColor="wheat">es5 edition</Text>
        <CodePane lang="javascript" source={es5InheritanceExample} style={styles} />
      </Fill>
      <Appear>
        <Fill>
          <Text textColor="wheat">es6 edition</Text>
          <CodePane lang="javascript" source={es6InheritanceExample} style={styles} />
        </Fill>
      </Appear>
    </Layout>
  </Slide>
    );
