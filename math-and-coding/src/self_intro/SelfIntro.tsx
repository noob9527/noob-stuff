// @ts-ignore
import gaokaoScore from "./gaokao.jpg";
// @ts-ignore
import resume0 from "./resume0.png";
import { FlexBox, Image, Notes, Slide, Text } from 'spectacle';
import React from 'react';
import { MathJax } from 'better-react-mathjax';

export const SelfIntro = () => (
  <>
    <Slide>
      <FlexBox height={'100%'} alignItems={'center'} justifyContent={'center'}>
        <Image src={resume0} width={'auto'} height={'80%'}></Image>
      </FlexBox>
      <Notes>
        <Text>因为各种各样的原因，我在读书时期特别叛逆，不愿意学习。有多叛逆？不只是逃课，我连高考都“逃”了，我是我们高中唯一一个高考0分的人。</Text>
      </Notes>
    </Slide>
    <Slide>
      <FlexBox flexDirection={'column'} height={'100%'}>
        <Image src={gaokaoScore} height={'100%'}></Image>
      </FlexBox>
      <Notes>
        <Text fontSize={'28px'}>
          不想读书有各式各样的原因，其中之一就是，我觉得我当时学到的知识，日常生活已经够用了。
        </Text>
        <MathJax style={{ fontSize: '28px' }}>
          我当时很困惑，像三角函数，对数这样的东西，除了应付考试，到底还有什么用？
          去菜市场买菜不会因为我会三角函数就便宜两毛钱。家里过年的时候，如果我背几首古诗，家里一高兴可能给我多发一个红包，
          但是如果我背 $cos30^\circ = \sqrt{3}/2$， $cos45^\circ = \sqrt{2}/2$ 都不会有人理我
        </MathJax>
        <Text fontSize={'28px'}>
          后来进入了程序员行业，我的工作开始越来越依赖一些基础学科，最主要的是英语，其次是数学。
          英语是做程序员最重要的技能，如果还想往机器学习领域发展，数学就变得越来越重要。 最后我不得不花大量的业余时间来
          自学英语和数学。
        </Text>
        <Text fontSize={'28px'}>
          学数学很痛苦，自学数学就更痛苦了，过程中我就经常幻想，如果我可以穿越回20年前，我要怎么说服当时的自己，数学真的有用。
        </Text>
      </Notes>
    </Slide>
  </>
)
