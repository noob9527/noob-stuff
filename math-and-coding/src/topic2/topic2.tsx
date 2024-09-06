import React from "react";
import {Appear, Heading, ListItem, Slide, Table, TableBody, TableCell, TableHeader, TableRow} from "spectacle";
import {MathJax} from "better-react-mathjax";

export const Topic2 = () => {
    return (
        <>
            <Slide>
                <Heading>三角函数</Heading>
                <MathJax style={{fontSize: '32px'}}>$$y=cos(\Theta)$$</MathJax>
                <Appear>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>$0\deg$</TableCell>
                                <TableCell>$90\deg$</TableCell>
                                <TableCell>$180\deg$</TableCell>
                            </TableRow>
                        </TableHeader>
                        <TableBody></TableBody>
                    </Table>
                </Appear>
            </Slide>
            <Slide>
                <Heading>余弦定理</Heading>
            </Slide>
            <Slide>
                <Heading>文本相似性</Heading>
            </Slide>
        </>
    )
}
