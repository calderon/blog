import React from "react"

import { Container, ContainerMain, ContainerColumn } from "../Container"
import { Link } from "../Link"

const Footer = props => {
  return (
    <Container as="footer" main secondary small noHeader>
      <ContainerMain columnize={2}>
        <ContainerColumn>
          <p>
            This blog is made with{" "}
            <Link to="https://www.gatsbyjs.org/" title="gatsby" />, hosted in{" "}
            <Link to="https://github.com/calderon/blog" title="github" me /> and
            deployed using github actions.
          </p>
        </ContainerColumn>

        <ContainerColumn opacity=".6" textRight>
          <p>
            the content from the blog is{" "}
            <span className="copyright">&copy; 2020 danielcalderon.net</span>
          </p>
        </ContainerColumn>
      </ContainerMain>
    </Container>
  )
}

export default Footer
