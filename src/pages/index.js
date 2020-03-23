import React from "react"
import styled from "styled-components"

import { devices } from "../assets/styles/helpers"

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
import { Link, ExternalLink } from "../components/Link"

const FirstContainer = styled(Container)`
  padding-top: 4.5rem;
  padding-bottom: 6rem;

  @media ${devices.lg} {
    padding-top: 9rem;
    padding-bottom: 11.5rem;
  }
`

const Main = styled.main.attrs(props => ({
  className: "main",
}))`
  grid-column-start: 1;
  grid-column-end: 2;
  display: grid;
`

const StyledExternalLinkItem = styled.li`
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

const ExternalLinkItem = props => {
  return (
    <StyledExternalLinkItem>
      <ExternalLink {...props} />
    </StyledExternalLinkItem>
  )
}

const Home = props => {
  return (
    <Layout>
      <FirstContainer as="aside" bright role="banner">
        <Heading srOnly>Welcome message</Heading>
        <p>
          Hi. I’m a <mark>front-end developer</mark> from Sevilla.
          <br />I write here about things I love: <mark>Javascript</mark>,{" "}
          <mark>React</mark> and <mark>CSS3</mark>.
        </p>

        <p>
          <mark>Be welcome.</mark>
        </p>
      </FirstContainer>

      <Main>
        <Container main tertiary role="complementary">
          <ContainerHeader>
            <ContainerHeading>
              Latest articles{" "}
              <small>
                in my <Link to="/blog">blog</Link>
              </small>
            </ContainerHeading>
          </ContainerHeader>

          <ContainerMain columnize={3}>
            <ContainerColumn>This will be a blog post</ContainerColumn>
            <ContainerColumn>This will be a blog post</ContainerColumn>
            <ContainerColumn>This will be a blog post</ContainerColumn>
          </ContainerMain>
        </Container>

        <Container id="contact" main primary>
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
            <ExternalLinkItem
              to="https://github.com/calderon"
              title="github"
              me
            />

            <ExternalLinkItem
              to="https://twitter.com/dcalderon"
              title="twitter"
              me
            />

            <ExternalLinkItem
              to="http://linkedin.com/in/danielcalderon"
              title="linkedin"
              me
            />

            <ExternalLinkItem
              to="https://stackoverflow.com/users/7442990/daniel-calder%c3%b3n-portillo"
              title="stack overflow"
              me
            />
          </List>
        </Container>
      </Main>
    </Layout>
  )
}

export default Home
