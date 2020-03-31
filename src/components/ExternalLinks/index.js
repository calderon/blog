import React from "react"
import styled from "styled-components"

import { Container, ContainerHeading } from "../Container"
import List from "../List"
import { Link } from "../Link"

const StyledExternalLinkItem = styled.li`
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

const ExternalLinkItem = props => {
  return (
    <StyledExternalLinkItem>
      <Link {...props} />
    </StyledExternalLinkItem>
  )
}

const ExternalLinks = props => {
  return (
    <Container as="aside" main bright inline>
      <ContainerHeading>I'm also in</ContainerHeading>
      <List unstyled inlineBlock>
        <ExternalLinkItem to="https://github.com/calderon" title="github" me />

        <ExternalLinkItem
          to="https://twitter.com/dcalderon"
          title="twitter"
          me
        />

        <ExternalLinkItem
          to="http://linkedin.com/in/danielcalderon"
          title="linkedin"
          me
        />

        <ExternalLinkItem
          to="https://stackoverflow.com/users/7442990/daniel-calder%c3%b3n-portillo"
          title="stack overflow"
          me
        />
      </List>
    </Container>
  )
}

export default ExternalLinks
