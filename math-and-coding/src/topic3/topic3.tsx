import React, { useEffect } from "react";
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
    TableRow, FlexBox, Stepper, Markdown, Text, Box, Notes, Quote
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

// @ts-ignore
import mousePoisonPuzzle from './mouse-poison-puzzle.png';
// @ts-ignore
import mousePoisonPuzzleAnswer1 from './mouse-poison-puzzle-answer1.png';
// @ts-ignore
import mousePoisonPuzzleAnswer2 from './mouse-poison-puzzle-answer2.png';
// @ts-ignore
import mousePoisonPuzzleAnswer3 from './mouse-poison-puzzle-answer3.png';

function getRandomIntInclusive(min: number, max: number): number {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

export const Topic3 = () => {
    const max = 32
    let randomNumber = 25
    // getRandomIntInclusive(1, max)

    useEffect(() => {
        randomNumber = getRandomIntInclusive(1, max)
    }, [])

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
                <Heading>
                    猜一个 1 ~ {max} 之间的数字
                </Heading>
                {/*<Text textAlign={'center'}>*/}
                {/*</Text>*/}
                <Appear>
                    <Heading color={'primary'}>
                        {randomNumber}
                    </Heading>
                </Appear>
                <Notes>
                    <Text>
                        我只能回答是与否
                    </Text>
                    <Text>
                        数字是 {randomNumber}
                    </Text>
                    <Text>
                        二分查找
                    </Text>
                </Notes>
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
                            <MathJax style={{fontSize: '32px'}}>{'$$H=-\\sum P_i\\log P_i$$'}</MathJax>
                        </FlexBox>
                    </Appear>
                </FlexBox>
            </Slide>
            <Slide>
                <FlexBox flexDirection={'column'} justifyContent={'space-around'} height={'100%'}>
                    <FlexBox justifyContent={'space-around'} width={'100%'}>
                        <FlexBox flexDirection={'column'}>
                            <Text>H(1~32)</Text>
                            <MathJax style={{fontSize: '32px'}}>
                                {`$$
                                \\begin{aligned}
                                H_x &= - \\log_2 \\frac{1}{32} \\\\
                                    &= \\log_2 32 \\quad \\text{(对数的幂性质)}  \\\\
                                    &= 5  \\quad \\text{(比特 bits)}
                                \\end{aligned}
                                $$`}
                                {/*{'$H_x = - \\log_2 \\frac{1}{9}$ (比特 bits)'}*/}
                            </MathJax>
                        </FlexBox>
                        <FlexBox flexDirection={'column'}>
                            <Text>H(是或否)</Text>
                            <MathJax style={{fontSize: '32px'}}>
                                {`$$
                                \\begin{aligned}
                                H_x &= - \\log_2 \\frac{1}{2}  \\\\
                                    &= \\log_2 2 \\quad \\text{(对数的幂性质)}  \\\\
                                    &= 1  \\quad \\text{(比特 bit)}
                                \\end{aligned}
                                $$`}
                                {/*{'$H_y = - \\log_2 \\frac{1}{3}$ (比特 bits)'}*/}
                            </MathJax>
                        </FlexBox>
                    </FlexBox>
                    <Box>
                        <Appear>
                            <MathJax style={{fontSize: '32px'}}>每问一次，不确定性最多能减少 1 bit$</MathJax>
                            <MathJax style={{fontSize: '32px'}}>
                                {`理论上需要问 = $\\frac{H_x}{H_y} = \\frac{5}{1} = 5$ 次`}
                            </MathJax>
                        </Appear>
                    </Box>
                </FlexBox>
            </Slide>
            <Slide>
                <FlexBox flexDirection={'column'} justifyContent={'space-around'} height={'100%'}>
                    <FlexBox justifyContent={'space-around'} width={'100%'}>
                        <FlexBox flexDirection={'column'}>
                            <Text>H(哪个小球较重)</Text>
                            <MathJax style={{fontSize: '32px'}}>
                                {`$$
                                \\begin{aligned}
                                H_x &= - \\log_2 \\frac{1}{9}  \\\\
                                    &= \\log_2 9
                                \\end{aligned}
                                $$`}
                                {/*{'$H_x = - \\log_2 \\frac{1}{9}$ (比特 bits)'}*/}
                            </MathJax>
                        </FlexBox>
                        <FlexBox flexDirection={'column'}>
                            <Text>H(天平称量一次)</Text>
                            <MathJax style={{fontSize: '32px'}}>
                                {`$$
                                \\begin{aligned}
                                H_x &= - \\log_2 \\frac{1}{3}  \\\\
                                    &= \\log_2 3
                                \\end{aligned}
                                $$`}
                                {/*{'$H_y = - \\log_2 \\frac{1}{3}$ (比特 bits)'}*/}
                            </MathJax>
                        </FlexBox>
                    </FlexBox>
                    <Box>
                        <Appear>
                            <MathJax style={{fontSize: '32px'}}>每称重一次，不确定性最多能减少 $log_2 3$ (bits)</MathJax>
                            <MathJax style={{fontSize: '32px'}}>
                                {`理论最少称重次数 = $\\frac{H_x}{H_y} = \\frac{\\log_2 9}{\\log_2 3} = \\log_3 9 = 2$ 次`}
                            </MathJax>
                            {/*<MathJax style={{fontSize: '32px'}}>*/}
                            {/*    {`对数幂性质 $H_x = log_2 9 \\quad H_y = log_2 3$`}*/}
                            {/*</MathJax>*/}
                            {/*<MathJax style={{fontSize: '32px'}}>*/}
                            {/*    {`对数基底转换 $\\frac{H_x}{H_y} = \\frac{log_2 9}{log_2 3} = log_3 9 = 2$`}*/}
                            {/*</MathJax>*/}
                        </Appear>
                    </Box>
                    {/*                    <Markdown>*/}
                    {/*                        {`*/}
                    {/*- 对数幂性质 $H_x = log_2 9 \\quad H_y = log_2 3$                        */}
                    {/*- 对数基底转换 $\\frac{H_x}{H_y} = \\frac{log_2 9}{log_2 3} = log_3 9 = 2$                    */}
                    {/*                        `}*/}
                    {/*                    </Markdown>*/}
                </FlexBox>
                <Notes>
                    <MathJax>$\log_3 9 = 2$</MathJax>
                    <MathJax>$3^2 = 9$</MathJax>
                    <Markdown>
                        {`
- 对数幂性质：$- log_2(y) = log_2(y^-1) = log_2(\\frac{1}{y})$
- 对数基底转换：$log_b x = \\frac{log_k x}{log_k b}$
                        `}
                    </Markdown>
                </Notes>
            </Slide>
            <Slide>
                <FlexBox height={'100%'} alignItems={'center'} justifyContent={'center'}>
                    <Image src={mousePoisonPuzzle} width={'auto'} height={'80%'}></Image>
                </FlexBox>
                <Notes>
                    <Text>
                        有 1000 个一模一样的瓶子，其中有 999 瓶是普通的水，有一瓶是毒药。你有一些小白鼠用来找出毒药，喝下毒药的老鼠会在第二天死亡，最少需要多少只小白鼠才能保证在第二天找出哪一瓶是毒药？
                    </Text>
                    <Text>
                        每只小白鼠可以喝任意瓶饮料
                    </Text>
                </Notes>
                {/*<Text textAlign={'center'}>*/}
                {/*</Text>*/}
            </Slide>
            <Slide>
                <FlexBox flexDirection={'column'} justifyContent={'space-around'} height={'100%'}>
                    <FlexBox justifyContent={'space-around'} width={'100%'}>
                        <FlexBox flexDirection={'column'}>
                            <Text>H(哪一瓶是毒药)</Text>
                            <MathJax style={{fontSize: '32px'}}>
                                {`$$
                                \\begin{aligned}
                                H_x &= - \\log_2 \\frac{1}{1000} \\\\
                                    &= \\log_2 1000 \\lt \\log_2 1024  \\\\
                                    &\\approx 10 \\quad (bits)
                                \\end{aligned}
                                $$`}
                            </MathJax>
                        </FlexBox>
                        <FlexBox flexDirection={'column'}>
                            <Text>H(生或死)</Text>
                            <MathJax style={{fontSize: '32px'}}>
                                {`$$
                                \\begin{aligned}
                                H_x &= - \\log_2 \\frac{1}{2}  \\\\
                                    &= \\log_2 2  \\\\
                                    &= 1 (bit)
                                \\end{aligned}
                                $$`}
                            </MathJax>
                        </FlexBox>
                    </FlexBox>
                    <Box>
                        <Appear>
                            <MathJax style={{fontSize: '32px'}}>每加一支老鼠，毒药位置的“不确定性”最多能减少 1 bit</MathJax>
                            <MathJax style={{fontSize: '32px'}}>
                                {`理论上至少需要 = $\\frac{H_x}{H_y} \\approx \\frac{10}{1} = 10$ 支老鼠`}
                            </MathJax>
                        </Appear>
                    </Box>
                </FlexBox>
                <Notes>
                    <Text>
                        实际应用中，还需要理解条件熵(Conditional Entropy)和互信息(Mutual Information)的概念
                    </Text>
                    <MathJax>{`$H(X|Y)=-\\sum_{x \\in \\mathcal X, y\\in\\mathcal Y}p(x,y)\\log\\,p(x|y)$`}</MathJax>
                    <MathJax>$I(X;Y)=H(X)-H(X|Y)=H(Y)-H(Y|X)$</MathJax>
                    <Text>
                        找到理论最少需要10支老鼠并没有解决问题，还需要找到具体的方法
                    </Text>
                </Notes>
            </Slide>
            <Slide>
                <FlexBox height={'100%'} alignItems={'center'} justifyContent={'center'}>
                    <Image src={mousePoisonPuzzleAnswer1} width={'auto'} height={'80%'}></Image>
                </FlexBox>
                <Notes>
                    <Text>
                        最终，根据10支老鼠的存货状态，得到一个 10 位二进制数，就是毒药的编号
                    </Text>
                </Notes>
            </Slide>
            <Slide>
                <FlexBox height={'100%'} alignItems={'center'} justifyContent={'center'}>
                    <Image src={mousePoisonPuzzleAnswer2} width={'auto'} height={'80%'}></Image>
                </FlexBox>
            </Slide>
            <Slide>
                <FlexBox height={'100%'} alignItems={'center'} justifyContent={'center'}>
                    <Image src={mousePoisonPuzzleAnswer3} width={'auto'} height={'80%'}></Image>
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
