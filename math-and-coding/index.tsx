import React from 'react';
import {createRoot} from 'react-dom/client';
import {Deck, DefaultTemplate, FlexBox, Heading, Markdown, MarkdownSlide, Slide, SpectacleLogo} from 'spectacle'
import {Topic1} from "./src/topic1/topic1";
import {Syllabus} from "./src/syllabus/syllabus";
import {MathJaxContext} from "better-react-mathjax";
import {Topic3} from "./src/topic3/topic3";
import {Topic2} from "./src/topic2/topic2";

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
            <Topic1/>
            {/*<Topic2/>*/}
            <Topic3/>
            {/*<Slide>*/}
            {/*    <FlexBox height="100%">*/}
            {/*        <Heading fontSize="h2">Made with</Heading>*/}
            {/*        <SpectacleLogo size={300}/>*/}
            {/*    </FlexBox>*/}
            {/*</Slide>*/}
        </MathJaxContext>
    </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation/>);
