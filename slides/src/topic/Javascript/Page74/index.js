import React from 'react';

import { Slide, BlockQuote, Quote, Cite } from 'spectacle';

const quote1 = '函数对象可以通过作用域链相互关联起来，' +
  '函数体内部的变量都可以保存在函数作用域内，' +
  '这种特性在计算机科学文献中称为“闭包”。' +
  '从技术的角度讲，所有的javascript函数都是闭包';
const quote2 = '闭包是指有权访问另一个函数作用域中的变量的函数';

const styles = {
  display: 'block',
};

export default () => (
  <Slide bgColor="#eee8d5" transition={['slide']}>
    <BlockQuote style={styles}>
      <Quote textColor="#b58900" textSize="1em">{quote1}</Quote>
      <Cite textAlign="right" textColor="#93a1a1">javascript权威指南</Cite>
    </BlockQuote>
    <BlockQuote style={{ ...styles, margin: '80px 20px 20px 20px' }}>
      <Quote textColor="#b58900" textSize="1em">{quote2}</Quote>
      <Cite textAlign="right" textColor="#93a1a1">javascript高级程序设计</Cite>
    </BlockQuote>
  </Slide>
);
