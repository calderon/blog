import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layoutDefault"
import Heading from "../components/Heading"
import {
  Container,
  ContainerHeader,
  ContainerHeading,
  ContainerMain,
  ContainerColumn,
} from "../components/Container"
import List from "../components/List"

const Main = styled.main.attrs(props => ({
  className: "main",
}))`
  grid-column-start: 1;
  grid-column-end: 2;
  display: grid;
`

const StyledExternalLink = styled.a`
  font-weight: 700;

  &::after {
    content: "·";
    margin: 0 1rem;
  }

  &:last-child {
    &::after {
      content: "";
    }
  }
`

const ExternalLink = props => {
  return (
    <StyledExternalLink
      href={props.url}
      rel="me external"
      title={props.children}
    >
      {props.children}
    </StyledExternalLink>
  )
}

const Home = props => {
  return (
    <Layout>
      <Container as="aside" bright role="banner">
        <Heading srOnly>Welcome message</Heading>
        <p>
          Hi. I’m a <mark>front-end developer</mark> from Sevilla.
          <br />I write here about things I love: <mark>Javascript</mark>,{" "}
          <mark>React</mark> and <mark>CSS3</mark>.
        </p>

        <p>
          <mark>Be welcome.</mark>
        </p>
      </Container>

      <Main>
        <Container main tertiary role="complementary">
          <ContainerHeader>
            <ContainerHeading>
              Latest articles{" "}
              <small>
                in my <Link to="/">blog</Link>
              </small>
            </ContainerHeading>
          </ContainerHeader>

          <ContainerMain columnize={3}>
            <ContainerColumn>This will be a blog post</ContainerColumn>
            <ContainerColumn>This will be a blog post</ContainerColumn>
            <ContainerColumn>This will be a blog post</ContainerColumn>
          </ContainerMain>
        </Container>

        <Container main primary>
          <ContainerHeader>
            <ContainerHeading>Contact me</ContainerHeading>
          </ContainerHeader>
          <ContainerMain columnize={3}>
            <ContainerColumn>
              <p>Take a sit. How can I help you?</p>
            </ContainerColumn>
            <ContainerColumn>Your name + Email</ContainerColumn>
            <ContainerColumn>Your message + Send your message</ContainerColumn>
          </ContainerMain>
        </Container>

        <Container main bright inline role="contentinfo">
          <ContainerHeading>I'm also in</ContainerHeading>
          <List unstyled inlineBlock>
            <li>
              <ExternalLink url="https://github.com/calderon">
                github
              </ExternalLink>
            </li>
            <li>
              <ExternalLink url="https://twitter.com/dcalderon">
                twitter
              </ExternalLink>
            </li>
            <li>
              <ExternalLink url="http://linkedin.com/in/danielcalderon">
                linkedin
              </ExternalLink>
            </li>
            <li>
              <ExternalLink url="https://stackoverflow.com/users/7442990/daniel-calder%c3%b3n-portillo">
                stack overflow
              </ExternalLink>
            </li>
          </List>
        </Container>
      </Main>
    </Layout>
  )
}

export default Home
