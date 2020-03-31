import React from "react"
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
import { Link } from "../components/Link"

import { Welcome } from "../components/Welcome"
import ContactMe from "../components/ContactMe"
import ExternalLinks from "../components/ExternalLinks"

const Main = styled.main.attrs(props => ({
  className: "main",
}))`
  grid-column-start: 1;
  grid-column-end: 2;
  display: grid;
`

const Home = props => {
  return (
    <Layout>
      <main>
        <Welcome main bright>
          <Heading as="h2" srOnly>
            Welcome message
          </Heading>
          <p>
            Hi. I’m a <mark>front-end developer</mark> from Sevilla.
            <br />I write here about things I love: <mark>
              Javascript
            </mark>, <mark>React</mark> and <mark>CSS3</mark>.
          </p>

          <p>
            <mark>Be welcome.</mark>
          </p>
        </Welcome>
      </main>

      <Container as="aside" tertiary>
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

      <ContactMe />
      <ExternalLinks />
    </Layout>
  )
}

export default Home
