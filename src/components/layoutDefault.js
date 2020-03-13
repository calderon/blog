import React from "react"
import { styled, ThemeProvider } from "styled-components"
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
  }
`

import Header from "../components/Header"

const LayoutDefault = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  )
}

export default LayoutDefault
