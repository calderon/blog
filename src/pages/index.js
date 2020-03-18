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
} from "../components/Container"
import List from "../components/List"

const StyledListItem = styled.li`
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

const ListItem = props => {
  return (
    <StyledListItem>
      <a href={props.url} rel="me external" title={props.children}>
        {props.children}
      </a>
    </StyledListItem>
  )
}

const Home = props => {
  return (
    <Layout>
      <Container main tertiary>
        <ContainerHeader>
          <ContainerHeading>
            Latest articles{" "}
            <small>
              in my <Link to="/">blog</Link>
            </small>
          </ContainerHeading>
        </ContainerHeader>

        <ContainerMain columnize={3}>
          <div>This will be a blog post</div>
          <div>This will be a blog post</div>
          <div>This will be a blog post</div>
        </ContainerMain>
      </Container>

      <Container main primary>
        <ContainerHeader>
          <ContainerHeading>Contact me</ContainerHeading>
        </ContainerHeader>
        <ContainerMain columnize={3}>
          <p>Take a sit. How can I help you?</p>
          <div>Your name + Email</div>
          <div>Your message + Send your message</div>
        </ContainerMain>
      </Container>

      <Container main bright inline>
        <ContainerHeading>I'm also in</ContainerHeading>
        <List unstyled inlineBlock>
          <ListItem url="https://github.com/calderon">github</ListItem>

          <ListItem url="https://twitter.com/dcalderon">twitter</ListItem>

          <ListItem url="http://linkedin.com/in/danielcalderon">
            linkedin
          </ListItem>

          <ListItem url="https://stackoverflow.com/users/7442990/daniel-calder%c3%b3n-portillo">
            stack overflow
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Home
