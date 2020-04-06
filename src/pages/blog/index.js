import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import { devices } from "../../assets/styles/helpers"

import Layout from "../../components/layoutDefault"
import { Container } from "../../components/Container"
import ArticleMini from "../../components/ArticleMini"

const ArticlesGrid = styled.div`
  display: grid;
  grid-gap: 2.5rem;

  @media ${devices.sm} {
    grid-gap: 1.25rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.lg} {
    grid-gap: 2.5rem;
    grid-template-columns: repeat(3, 1fr);
  }
`

const Blog = ({ data }) => {
  return (
    <Layout>
      <main>
        <Container main bright>
          <ArticlesGrid>
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
              <ArticleMini key={index} article={node} />
            ))}
          </ArticlesGrid>
        </Container>
      </main>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
        }
      }
    }
  }
`
