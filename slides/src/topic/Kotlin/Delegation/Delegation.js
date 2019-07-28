import React from 'react';
import { Appear, Heading, Slide } from 'spectacle';
import DefaultCodePane from '../components/DefaultCodePane';

const javaExtends = `
public class InstrumentedHashSet<E> extends HashSet<E> {
    // The number of attempted element insertions
    private int addCount = 0;
    public InstrumentedHashSet() { }

    @Override public boolean add(E e) {
        addCount++;
        return super.add(e);
    }
    @Override public boolean addAll(Collection<? extends E> c) {
        addCount += c.size();
        return super.addAll(c);
    }
    public int getAddCount() {
        return addCount;
    }
}
`.trim();

export default () => (
  <Slide>
    <Heading
      size={2}
      textColor="wheat"
      textSize="100px"
      margin="0 0 60px 0"
    >Delegation</Heading>
    <Appear>
      <div>
        {DefaultCodePane({
          lang: 'java',
          source: javaExtends,
          style: {
            minWidth: 0,
            maxWidth: 'unset',
            margin: 10,
            fontSize: '21px',
          },
        })}
      </div>
    </Appear>
  </Slide>
);
