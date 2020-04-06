import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { devices } from "../assets/styles/helpers"

import Layout from "../components/layoutDefault"
import Heading from "../components/Heading"
import {
  Container,
  ContainerHeader,
  ContainerHeading,
  ContainerColumn,
} from "../components/Container"
import { Link } from "../components/Link"
import ArticleMini from "../components/ArticleMini"

const Main = styled.main.attrs(props => ({
  className: "main",
}))`
  grid-column-start: 1;
  grid-column-end: 2;
  display: grid;
`

const ArticlesGridMini = styled.div`
  display: grid;
  grid-gap: 2.5rem;

  @media ${devices.md} {
    grid-gap: 1.25rem;
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${devices.lg} {
    grid-gap: 2.5rem;
  }
`

const Home = ({ data }) => {
  return (
    <Layout>
      <main>
        <Container main bright>
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
        </Container>
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

        <ArticlesGridMini>
          {data.allMarkdownRemark.edges.map(({ node }, index) => (
            <ArticleMini key={index} article={node} />
          ))}
        </ArticlesGridMini>
      </Container>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query LatestPostsQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date }, limit: 3) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            summary
          }
          fields {
            slug
          }
          html
        }
      }
    }
  }
`
