import React from "react"
import styled, { ThemeProvider } from "styled-components"
import "normalize.css"

import theme from "../theme"

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    &,
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: ${props => props.theme.font.base};
    letter-spacing: 0.12em;
    line-height: 1.5;
    word-spacing: 0.16em;
    background-color: ${props => props.theme.colors.light};
  }

  p {
    margin: 0 0 1rem 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

import Header from "../components/Header"
import Heading from "../components/Heading"
import { Container } from "./Container"

const Page = styled.div.attrs(props => ({
  className: "page",
}))`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  max-width: 1120px;
  margin: 0 auto;
`

const Main = styled.main.attrs(props => ({
  className: "main",
}))`
  grid-column-start: 1;
  grid-column-end: 2;
  display: grid;
`

const LayoutDefault = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Page>
        <Header />
        <Container as="aside" bright>
          <Heading srOnly>Welcome message</Heading>
          <p>
            Hi. I’m a <mark>front-end developer</mark> from Sevilla and this is
            my personal site.
          </p>

          <p>
            <mark>Be welcome.</mark>
          </p>
        </Container>
        <Main>{children}</Main>
      </Page>
    </ThemeProvider>
  )
}

export default LayoutDefault
