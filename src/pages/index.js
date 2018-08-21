import React from "react";
import '../style.css'
import {mx} from '../screensizes'
import { Heading, Flex, Column, Box, Container, Link, Text, Image } from 'rebass'
import { Wrapper, SmallerWrapper, Icon, Medium, SocialMedia, Paragraph,
   Project, ProjectTitle, ProjectDesc, ProjectFinish, Footer } from '../components/components'
import styled from 'styled-components'
import Helmet from 'react-helmet'

export default () => (
  <React.Fragment>
    <Wrapper>
      <Helmet
          title='WL CAT Club'
          meta={[
          {
            name: 'description',
            content: 'Quick CAT Club static site',
          },
          {
            name: 'keywords',
            content: 'reactjs, javascript, front-end, web development',
          },
        ]}
      />


      <CenteredBox>
        <CenteredBlock>
            <HeaderBlock>
              <Logo src="https://cdn.glitch.com/79ac2e94-b1ac-4f43-8bc2-e9b55f1b6d02%2FroundLogo.png?1534805204718" width="200" />
              <Hello>Take control of your education.</Hello>
              <SmallerHello>Callout Monday, August 27th at 1:00pm in room 2234</SmallerHello>
            </HeaderBlock>
        </CenteredBlock>
      </CenteredBox>
    </Wrapper>
    <Break>
      <CenteredBox>
        <Box width={500}>
          <Subhead>Previous Projects</Subhead>
          <Project href="https://catclub-demo.glitch.me" title="CAT Club Demo" desc="Text a color and see it update live!" />
          <Project href="https://instagram.com/anobot.wl" title="Anonbot" desc="An Instagram bot that lets you anonymously post confessions and announcements to an Instagram page!" />
          <Project href="https://github.com/wl-acsl/h-coin" title="H-Coin" desc="An almost working cryptocurrency built from scratch in 24 hours" />
          <ProjectFinish href="https://sideb-textgen.glitch.me" title="Side B Text Gen" desc="A pretty title and block quote generator that gives a nice touch to Medium articles" />
          <Break />
          <MiddleHello>You can do it, too!</MiddleHello>
        </Box>
      </CenteredBox>
    </Break>
    <Break>
      <CenteredBox>
        <Box width={750}>
          <Paragraph>CAT Club is aimed toward beginners. The proven hands-on learning environment
            means that whether you are just getting started or you are super experienced, there is a place
            for you at CAT Club.<br/><br/>

            CAT Club is a <Link target="_blank" href="https://hackclub.com" color="red">Hack Club</Link>,
            which is a network of student coding clubs in over 220 schools around the world! <strong>You're in good hands. </strong>
            We provide workshops that make it easy to get started, and we serve as mentors rather than lecturers. By the end of your
            first meeting, you will have a fully working website. Throughout the year, you'll go on to make amazing things!
          </Paragraph>
        </Box>
      </CenteredBox>
    </Break>
    <Break/><Break/>
    <Footer>Made with ❤️ by the CAT Club execs. </Footer>
    <Footer><Link target="_blank" href="https://github.com/MatthewStanciu/catclub-staticsite" color="white">View on GitHub</Link></Footer>
  </React.Fragment>
)

const Hello = Heading.extend.attrs({m: 0, fontSize: 70, textAlign: "left"})`
  position: relative;
  left: -6px;
  ${mx[0]} {
    left: 0px;
  }
  line-height: 1.5;
  color: white;
  font-family: 'Averta-Bold';
`
const SmallerHello = Heading.extend.attrs({fontSize: 25, mr: 5, textAlign: "center"})`
  line-height: 1.5;
  color:#b2b2b2;
  font-family: 'Averta-Bold';
`
const MiddleHello = Heading.extend.attrs({fontSize: 45, mr: 0, textAlign: "center"})`
  line-height: 1.5;
  color:white;
  font-family: 'Averta-Bold';
`
const Subhead = Heading.extend.attrs({f: 6, m: 0, fontSize: 30, textAlign: "center"})`
  line-height: 2;
  color: white;
  font-family: 'Averta-Bold';
`
const Logo = Image.extend.attrs({width: 200, mx: 160})`
  width: 200;
  height; 200;
`
const Left = Flex.extend.attrs()`
  position: relative;
  left: -25px;
  ${mx[0]} {
    left: -7px;
  }
`
const CenteredBox = Column.extend.attrs({})`
  display: flex;
  justify-content: center;
`

export const Break = Flex.extend.attrs({
  flexDirection: ['column', 'row'],
  px: 3
})`
  text-align: center;
  ${mx[0]} {
    min-height: 5vh;
    text-align: left;
  }
`

const HeaderBlock = Column.extend.attrs({ py: 2, pl: [null, 5] })`
  ${mx[0]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
const CenteredBlock = Column.extend.attrs({ py: 2, ml: [-25, 210], mr: [-40, 240]})`
  ${mx[0]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
