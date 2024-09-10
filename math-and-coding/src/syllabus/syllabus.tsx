import {FlexBox, Markdown, MarkdownSlide, Notes, Slide, SlideLayout, Text} from "spectacle";
// @ts-ignore
import syllabus from './syllabus.md?raw'
import React from "react";

export const Syllabus = () => {

    return (
        <Slide>
            <FlexBox margin={'auto'} width={'100%'} justifyContent={'flex-start'}>
                <Markdown>
                    {syllabus}
                </Markdown>
            </FlexBox>
            <Notes>
                <Text>
                    内容对初中生不够友好
                </Text>
                <Text>
                    解答20年前自己的困惑
                </Text>
                <Text>
                    科普
                </Text>
            </Notes>
        </Slide>
    )
}
