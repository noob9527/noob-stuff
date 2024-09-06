import React from "react";
import {Appear, Heading, ListItem, Slide} from "spectacle";
import {MathJax} from "better-react-mathjax";

export const Topic1 = () => {

    return (
        <>
            <Slide>
                <Heading>一元一次方程</Heading>
                <MathJax style={{fontSize: '32px'}}>$$y=ax+b$$</MathJax>
                <Appear>
                    <ListItem> <MathJax>$$ F = mg $$</MathJax></ListItem>
                    <ListItem> <MathJax>$$ F = kx $$</MathJax></ListItem>
                </Appear>
                函数图像
            </Slide>
            <Slide>
                <Heading>线性回归</Heading>
                least square
            </Slide>
            <Slide>
                <Heading>机器学习</Heading>
                数据图像
            </Slide>
        </>
    )
}
