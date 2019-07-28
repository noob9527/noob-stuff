import React from 'react';
import { Fit, Layout, Slide } from 'spectacle';
import DefaultCodePane from '../components/DefaultCodePane';
import H4 from '../components/H4';

const composition = `
// Wrapper class - uses composition in place of inheritance
public class InstrumentedSet<E> extends ForwardingSet<E> {
    private int addCount = 0;
    public InstrumentedSet(Set<E> s) {
        super(s);
    }
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

const forwarding = `
// Reusable forwarding class
public class ForwardingSet<E> implements Set<E> {
    private final Set<E> s;
    public ForwardingSet(Set<E> s) { this.s = s; }
    public void clear() { s.clear();}
    public boolean contains(Object o) { return s.contains(o);}
    public boolean isEmpty() { return s.isEmpty();}
    public int size() { return s.size();}
    public Iterator<E> iterator() { return s.iterator();}
    public boolean add(E e) { return s.add(e);}
    public boolean remove(Object o) { return s.remove(o);}
    public boolean containsAll(Collection<?> c) { return s.containsAll(c);}
    public boolean addAll(Collection<? extends E> c) { return s.addAll(c);}
    public boolean removeAll(Collection<?> c) { return s.removeAll(c);}
    public boolean retainAll(Collection<?> c) { return s.retainAll(c);}
}
`.trim();

export default () => (
  <Slide maxWidth="90vw" maxHeight="90%">
    <H4>Forwarding and Composition</H4>
    <Layout style={{ justifyContent: 'space-around' }}>
      <Fit style={{ flexBasis: '45%' }}>
        {DefaultCodePane({
          lang: 'java',
          source: forwarding,
          style: {
            minWidth: 0,
            maxWidth: 'unset',
            margin: 10,
            fontSize: '18px',
          },
        })}
      </Fit>
      <Fit style={{ flexBasis: '45%' }}>
        {DefaultCodePane({
          lang: 'java',
          source: composition,
          style: {
            minWidth: 0,
            maxWidth: 'unset',
            margin: 10,
            fontSize: '18px',
          },
        })}
      </Fit>
    </Layout>
  </Slide>
);
