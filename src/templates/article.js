import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { rgba } from "polished"

import { devices } from "../assets/styles/helpers"

import Layout from "../components/layoutDefault"
import { Link } from "../components/Link"
import { Container } from "../components/Container"

const StyledArticleContent = styled.div`
  color: ${props => rgba(props.theme.palette.primary, 0.85)};
`

const ArticleHeader = styled.header`
  margin: 0 0 2rem 0;
  padding-bottom: 2rem;
  font-weight: 500;

  h1 {
    font-size: 2rem;
    color: ${props => props.theme.palette.quaternary};
    margin: 0 0 0 0;

    @media ${devices.lg} {
      font-size: 3.2rem;
    }
  }

  time {
    color: ${props => rgba(props.theme.palette.primary, 0.9)};
  }
`

const Article = ({ article }) => {
  const date = article.frontmatter.date

  return (
    <article>
      <ArticleHeader>
        <h1>
          <Link to={`/${article.fields.slug}`}>
            {article.frontmatter.title}
          </Link>
        </h1>

        <time datetime={date}>
          {new Date(date).toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </ArticleHeader>

      <StyledArticleContent
        dangerouslySetInnerHTML={{ __html: article.html }}
      />
    </article>
  )
}

export default ({ data }) => {
  const article = data.markdownRemark

  return (
    <Layout>
      <Container main bright>
        <Article article={article} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query BlogArticle {
    markdownRemark {
      html
      frontmatter {
        title
        date
      }
      fields {
        slug
      }
    }
  }
`
