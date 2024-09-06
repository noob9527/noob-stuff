import {MarkdownSlide, SlideLayout} from "spectacle";
// @ts-ignore
import syllabus from './syllabus.md?raw'
import React from "react";

export const Syllabus = () => {

    return (
        // <SlideLayout.List items={['foo', 'bar']}>
        //
        // </SlideLayout.List>
        <MarkdownSlide>
            {syllabus}
        </MarkdownSlide>
    )
}
