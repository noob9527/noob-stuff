import React from 'react';
import { Fit, Layout, Slide } from 'spectacle';
import DefaultCodePane from '../components/DefaultCodePane';

import H5 from '../components/H5';
import H4 from '../components/H4';

const declareSiteVariance = `
interface Consumer<in T> {
    fun consume(obj: T)
}

interface Producer<out T> {
    fun produce(): T
}
`.trim();

const useSiteVariance = `
interface BiDirection<T> : Consumer<T>, Producer<T>

fun <T> produce(t: T, param: BiDirection<out T>) {
    // correct
    val res: T = param.produce()
    // doesn't compile
    param.consume(t)
}

fun <T> consume(t: T, param: BiDirection<in T>) {
    // correct
    param.consume(t)
    // doesn't compile
    val res: T = param.produce()
}
`.trim();

export default () => (
  <Slide maxHeight="90%" maxWidth="90vw">
    <H4>"Consumer in, Producer out"</H4>
    <Layout style={{ justifyContent: 'space-around' }}>
      <Fit style={{ flexBasis: '45%' }}>
        <H5>Declare-site Variance</H5>
        {DefaultCodePane({
          lang: 'kotlin',
          source: declareSiteVariance,
          style: {
            minWidth: 0,
            maxWidth: 'unset',
            margin: 10,
            fontSize: '25px',
          },
        })}
      </Fit>
      <Fit style={{ flexBasis: '45%' }}>
        <H5>Use-site Variance</H5>
        {DefaultCodePane({
          lang: 'kotlin',
          source: useSiteVariance,
          style: {
            minWidth: 0,
            maxWidth: 'unset',
            margin: 10,
            fontSize: '25px',
          },
        })}
      </Fit>
    </Layout>
  </Slide>
);
