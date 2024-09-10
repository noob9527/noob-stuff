import React from 'react';
import {createRoot} from 'react-dom/client';
import {Deck, DefaultTemplate, FlexBox, Heading, Image, Markdown, MarkdownSlide, Slide, SpectacleLogo} from 'spectacle'
import {Topic1} from "./src/topic1/topic1";
import {Syllabus} from "./src/syllabus/syllabus";
import {MathJaxContext} from "better-react-mathjax";
import {Topic3} from "./src/topic3/topic3";
import {Topic2} from "./src/topic2/topic2";
// @ts-ignore
import gaokaoScore from "./src/assets/gaokao.jpg";
// @ts-ignore
import resume0 from "./src/assets/resume0.png";

const Presentation = () => (
    <Deck template={() => <DefaultTemplate/>}>
        <MathJaxContext config={{
            tex: {
                inlineMath: [['$', '$'], ['\\(', '\\)']]
            }
        }}>
            {/*<Slide>*/}
            {/*    <FlexBox height="100%">*/}
            {/*        <Heading>数学和编程</Heading>*/}
            {/*    </FlexBox>*/}
            {/*</Slide>*/}
            <Syllabus/>
            <Slide>
                <FlexBox height={'100%'} alignItems={'center'} justifyContent={'center'}>
                    <Image src={resume0} width={'auto'} height={'80%'}></Image>
                </FlexBox>
            </Slide>
            <Slide>
                <FlexBox flexDirection={'column'} height={'100%'}>
                    <Image src={gaokaoScore} height={'100%'}></Image>
                </FlexBox>
            </Slide>
            <Topic1/>
            <Topic2/>
            <Topic3/>
        </MathJaxContext>
    </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation/>);
