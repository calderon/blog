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
