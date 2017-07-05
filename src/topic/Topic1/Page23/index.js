import React from 'react';
import {
    Slide,
    Appear,
    Table,
    TableBody,
    TableRow,
    TableItem,
    Image,
} from 'spectacle';

import angular from './angular.svg';
import vue from './vue.svg';
import react from './react.svg';
import ionic from './ionic.svg';
import weex from './weex.svg';
import node from './node.svg';
import electron from './electron.svg';

export default () => (
  <Slide>
    <Table>
      <TableBody>
        <TableRow>
          <TableItem textAlign="left">web</TableItem>
          <TableItem textAlign="left">
            { [angular, vue, react].map((e, i) => logo(e, i)) }
          </TableItem>
        </TableRow>
        <Appear>
          <TableRow>
            <TableItem textAlign="left">mobile</TableItem>
            <TableItem textAlign="left">
              { [ionic, weex, react].map((e, i) => logo(e, i)) }
            </TableItem>
          </TableRow>
        </Appear>
        <Appear>
          <TableRow>
            <TableItem textAlign="left">desktop</TableItem>
            <TableItem textAlign="left">
              {logo(electron)}
            </TableItem>
          </TableRow>
        </Appear>
        <Appear>
          <TableRow>
            <TableItem textAlign="left">server</TableItem>
            <TableItem textAlign="left">
              {logo(node)}
            </TableItem>
          </TableRow>
        </Appear>
      </TableBody>
    </Table>
  </Slide>
    );

function logo(src, key) {
    return (
      <Image key={key} src={src} width="50px" height="50px" margin="10px" />
    );
}
