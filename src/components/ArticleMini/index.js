import React from "react"
import styled from "styled-components"
import { rgba } from "polished"

import { devices } from "../../assets/styles/helpers"

import { Link } from "../Link"

const StyledArticleHeader = styled.header`
  figure,
  img {
    width: 100%;
  }

  h1 {
    margin: 1.4rem 2.5rem 1.7rem;
    font-weight: 500;
    font-size: 2rem;

    @media ${devices.lg} {
      font-size: 1.8rem;
    }
  }
`

const ArticleHeader = ({ article }) => {
  return (
    <StyledArticleHeader>
      <figure>
        <img src="https://via.placeholder.com/500x200" />
      </figure>

      <h1>{article.title}</h1>
    </StyledArticleHeader>
  )
}

const StyledArticleContent = styled.div`
  margin: 1.4rem 2.5rem;
  font-size: 1.6rem;
  font-weight: 400;

  @media ${devices.lg} {
    font-size: 1.4rem;
  }
`

const ArticleContent = ({ article }) => {
  return (
    <StyledArticleContent
      dangerouslySetInnerHTML={{ __html: article.summary }}
    />
  )
}

const StyledArticleMini = styled.article`
  transition: background 600ms, box-shadow 300ms;
  background: rgba(0, 0, 0, 0.04);
  color: ${props => props.theme.palette.primary};
  position: relative;

  &:hover {
    box-shadow: 0 0.3rem 1rem 0 rgba(0, 0, 0, 0.1);
    background: ${props => props.theme.colors.bright};
    cursor: pointer;
  }
`

const ArticleLink = styled(Link)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const ArticleMini = props => {
  const { article, ...others } = props

  return (
    <StyledArticleMini {...others}>
      <ArticleHeader article={article.frontmatter} />
      <ArticleContent article={article.frontmatter} />
      <ArticleLink to={article.fields.slug}>
        <span className="srOnly">Go to article</span>
      </ArticleLink>
    </StyledArticleMini>
  )
}

export default ArticleMini
