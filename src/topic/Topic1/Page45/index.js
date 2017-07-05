import React from 'react';
import {
    Slide,
    Table,
    TableBody,
    TableRow,
    TableItem,
} from 'spectacle';

export default () => (
  <Slide>
    <Table>
      <TableBody>
        <TableRow>
          <TableItem textAlign="left">weakly and statically:</TableItem>
          <TableItem textAlign="left">c/c++</TableItem>
        </TableRow>
        <TableRow>
          <TableItem textAlign="left">weakly and dynamically:</TableItem>
          <TableItem textAlign="left">php/javascript</TableItem>
        </TableRow>
        <TableRow>
          <TableItem textAlign="left">strongly and statically:</TableItem>
          <TableItem textAlign="left">java/c#</TableItem>
        </TableRow>
        <TableRow>
          <TableItem textAlign="left">strongly and dynamically:</TableItem>
          <TableItem textAlign="left">python</TableItem>
        </TableRow>
      </TableBody>
    </Table>
  </Slide>
);
