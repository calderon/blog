import React from "react"
import styled, { ThemeProvider } from "styled-components"

import theme from "../theme"
import GlobalStyle from "../assets/styles/global"

import Header from "./Header"
import Heading from "./Heading"
import { ExternalLink } from "./Link"
import { Container, ContainerMain, ContainerColumn } from "./Container"

const Page = styled.div.attrs(props => ({
  className: "page",
}))`
  max-width: 1120px;
  margin: 0 auto;
`

const LayoutDefault = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Page>
        <Header />

        {children}

        <Container as="footer" main secondary small noHeader>
          <ContainerMain columnize={2}>
            <ContainerColumn>
              <p>
                This blog is made with{" "}
                <ExternalLink to="https://www.gatsbyjs.org/" title="gatsby" />,
                hosted in{" "}
                <ExternalLink
                  to="https://github.com/calderon/blog"
                  title="github"
                  me
                />{" "}
                and deployed using github actions.
              </p>
            </ContainerColumn>

            <ContainerColumn opacity=".6" textRight>
              <p>
                the content from the blog is{" "}
                <span className="copyright">
                  &copy; 2020 danielcalderon.net
                </span>
              </p>
            </ContainerColumn>
          </ContainerMain>
        </Container>
      </Page>
    </ThemeProvider>
  )
}

export default LayoutDefault
