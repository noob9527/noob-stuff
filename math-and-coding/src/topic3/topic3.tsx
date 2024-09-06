import React from "react";
import {
    Appear,
    Heading,
    ListItem,
    Slide,
    SlideLayout,
    Table,
    Image,
    TableBody,
    TableCell,
    TableHeader,
    TableRow, FlexBox, Stepper, Markdown, Text, Box
} from "spectacle";
import {MathJax} from "better-react-mathjax";
// // @ts-ignore
// import scale1 from './scale-step1.excalidraw.png';
// // @ts-ignore
// import scale2 from './scale-step2.excalidraw.png';
// // @ts-ignore
// import scale3 from './scale-step3.excalidraw.png';

// @ts-ignore
import scale1 from './scale-step1.png';
// @ts-ignore
import scale2 from './scale-step2.png';
// @ts-ignore
import scale3 from './scale-step3.png';


export const Topic3 = () => {
    return (
        <>
            <Slide>
                <FlexBox height={'100%'} alignItems={'center'} justifyContent={'center'}>
                    <Image src={scale1} width={'80%'} height={'auto'}></Image>
                </FlexBox>
            </Slide>
            <Slide>
                <FlexBox height={'100%'}
                         width={'100%'}
                         alignItems={'center'}
                         justifyContent={'center'}>
                    <Image src={scale2} width={'50%'}></Image>
                    <Appear inactiveStyle={{
                        width: '50%',
                        opacity: '0',
                    }} activeStyle={{
                        width: '50%',
                        opacity: '1',
                    }}>
                        <Image src={scale3} width={'100%'}></Image>
                    </Appear>
                </FlexBox>
            </Slide>
            <Slide>
                <FlexBox height={'100%'}
                         width={'100%'}
                         alignItems={'center'}
                         justifyContent={'center'}>
                    <FlexBox flexDirection={'column'}>
                        <Heading>指数</Heading>
                        <Text>（初中二年级）</Text>
                        <MathJax style={{fontSize: '32px'}}>$$y=2^x$$</MathJax>
                    </FlexBox>
                    <Appear inactiveStyle={{
                        width: '33%',
                        opacity: '0',
                    }} activeStyle={{
                        width: '33%',
                        opacity: '1',
                    }}>
                        <FlexBox flexDirection={'column'}>
                            <Heading>对数</Heading>
                            <Text>（高中一年级）</Text>
                            <MathJax style={{fontSize: '32px'}}>{'$$x=log_2(y)$$'}</MathJax>
                        </FlexBox>
                    </Appear>
                    <Appear inactiveStyle={{
                        width: '33%',
                        opacity: '0',
                    }} activeStyle={{
                        width: '33%',
                        opacity: '1',
                    }}>
                        <FlexBox flexDirection={'column'}>
                            <Heading>信息熵</Heading>
                            <Text>（大学）</Text>
                            <MathJax style={{fontSize: '32px'}}>{'$$H=-\\sum(P_i\\log P_i)$$'}</MathJax>
                        </FlexBox>
                    </Appear>
                </FlexBox>
            </Slide>
            <Slide>
                <FlexBox flexDirection={'column'} justifyContent={'space-around'} height={'100%'}>
                    <FlexBox justifyContent={'space-around'} width={'100%'}>
                        <FlexBox flexDirection={'column'}>
                            <Text>H(哪个小球较重)</Text>
                            <MathJax style={{fontSize: '32px'}}>
                                {'$H_x = - \\log_2 \\frac{1}{9}$ (比特 bits)'}
                            </MathJax>
                        </FlexBox>
                        <FlexBox flexDirection={'column'}>
                            <Text>H(天平称量一次)</Text>
                            <MathJax style={{fontSize: '32px'}}>
                                {'$H_y = - \\log_2 \\frac{1}{3}$ (比特 bits)'}
                            </MathJax>
                        </FlexBox>
                    </FlexBox>
                    <Box>
                        <MathJax style={{fontSize: '32px'}}>
                            {`理论最少称重次数 = $\\frac{H_x}{H_y}$`}
                        </MathJax>
                        <MathJax style={{fontSize: '32px'}}>
                            {`对数幂性质 $H_x = log_2 9 \\quad H_y = log_2 3$`}
                        </MathJax>
                        <MathJax style={{fontSize: '32px'}}>
                            {`对数基底转换 $\\frac{H_x}{H_y} = \\frac{log_2 9}{log_2 3} = log_3 9 = 2$`}
                        </MathJax>
                    </Box>
                    {/*                    <Markdown>*/}
                    {/*                        {`*/}
                    {/*- 对数幂性质 $H_x = log_2 9 \\quad H_y = log_2 3$                        */}
                    {/*- 对数基底转换 $\\frac{H_x}{H_y} = \\frac{log_2 9}{log_2 3} = log_3 9 = 2$                    */}
                    {/*                        `}*/}
                    {/*                    </Markdown>*/}
                </FlexBox>
            </Slide>
            {/*<SlideLayout.TwoColumn*/}
            {/*    left={*/}
            {/*        <>*/}
            {/*            <Heading>指数</Heading>*/}
            {/*            <MathJax style={{fontSize: '32px'}}>$$y=2^x$$</MathJax>*/}
            {/*        </>*/}
            {/*    }*/}
            {/*    right={*/}
            {/*        <>*/}
            {/*            <Heading>对数</Heading>*/}
            {/*            <MathJax style={{fontSize: '32px'}}>{'$$x=log(y)$$'}</MathJax>*/}
            {/*        </>*/}
            {/*    }*/}
            {/*/>*/}
            {/*<Slide>*/}
            {/*    <Heading>对数函数</Heading>*/}
            {/*    <MathJax style={{fontSize: '32px'}}>$$y=cos(\Theta)$$</MathJax>*/}
            {/*    <Appear>*/}
            {/*        <Table>*/}
            {/*            <TableHeader>*/}
            {/*                <TableRow>*/}
            {/*                    <TableCell></TableCell>*/}
            {/*                    <TableCell>$0\deg$</TableCell>*/}
            {/*                    <TableCell>$90\deg$</TableCell>*/}
            {/*                    <TableCell>$180\deg$</TableCell>*/}
            {/*                </TableRow>*/}
            {/*            </TableHeader>*/}
            {/*            <TableBody></TableBody>*/}
            {/*        </Table>*/}
            {/*    </Appear>*/}
            {/*</Slide>*/}
            {/*<Slide>*/}
            {/*    <Heading>余弦定理</Heading>*/}
            {/*</Slide>*/}
            {/*<Slide>*/}
            {/*    <Heading>文本相似性</Heading>*/}
            {/*</Slide>*/}
        </>
    )
}
