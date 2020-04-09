import React from "react"
import styled, { ThemeProvider } from "styled-components"

import theme from "../theme"

import GlobalStyle from "../assets/styles/global"
import BaseStyle from "../assets/styles/base"

import Header from "./Header"
import Footer from "./Footer"

const Page = styled.div.attrs(props => ({
  className: "page",
}))`
  max-width: 1440px;
  margin: 0 auto;
`

const LayoutDefault = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BaseStyle />
      <Page>
        <Header />

        {children}

        <Footer />
      </Page>
    </ThemeProvider>
  )
}

export default LayoutDefault
