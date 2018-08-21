import React from 'react'
import { Heading, Flex, Box, Link, Image, Text } from 'rebass'
import {mx} from '../screensizes'
import { replace } from 'lodash';

export const Wrapper = Flex.extend.attrs({
  flexDirection: ['column', 'row'],
  px: 3,
  ml: 50
})`
  text-align: center;
  ${mx[0]} {
    min-height: 30vh;
    text-align: left;
  }
`
export const SmallerWrapper = Flex.extend.attrs({
  flexDirection: ['column', 'row'],
  px: 3
})`
  text-align: center;
  ${mx[0]} {
    min-height: 10vh;
    text-align: left;
  }
`

export const Paragraph = Text.extend.attrs()`
  color: white;
  display: inline-block;
  text-align: left;
  line-height: 1.5;
  border-radius: 999px;
  padding: 0 .5em;
  margin-left: 2em;
`

export const Project = ({title, width, desc, href, ...props}) => (
    <Link target="_blank" href={href} color="black" {...props}>
      <StyledBox width={width} p={3} color='white' bg='black' {...props}>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDesc>{desc}</ProjectDesc>
      </StyledBox>
    </Link>
)
export const ProjectFinish = ({title, width, desc, href, ...props}) => (
  <Link target="_blank" color="black" href={href} {...props}>
    <StyledBoxFinish width={width} p={3} color='white' bg='black' {...props}>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDesc>{desc}</ProjectDesc>
    </StyledBoxFinish>
  </Link>
)

export const ProjectTitle = Text.extend.attrs({fontSize: 25, textAlign: "center"})`
  font-family: 'Averta-Bold';
  color: white;
  line-height: 1.5;
`
export const ProjectDesc = Text.extend.attrs({textAlign: "center"})`
  font-family: 'Averta';
  color: #b2b2b2;
  line-height: 1;
`

export const StyledBox = Box.extend.attrs({})`
  padding: 7% 0 7% 0;
  border-top:2px solid white;

`
export const StyledBoxFinish = Box.extend.attrs({})`
  padding: 7% 0 7% 0;
  border-top:2px solid white;
  border-bottom: 2px solid white;
`

export const Footer = Text.extend.attrs({py: 1, textAlign: 'center'})`
  font-family: 'Averta';
  color: white;
  line-height: 1;
`
