import React from "react"
import styled, { css } from "styled-components"
import { rgba } from "polished"

import FontAwesomeIcon from "../FontAwesomeIcon"
import {
  faCreativeCommons,
  faCreativeCommonsBy,
} from "@fortawesome/free-brands-svg-icons"

import { Container, ContainerHeader, ContainerHeading, ContainerContent, ContainerColumn } from "../Container"
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
    <Container as="aside" bright inline>
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


const ContactMe = props => {
  return (
    <Container as="aside" id="contact" primary>
      <ContainerHeader>
        <ContainerHeading>Contact me</ContainerHeading>
      </ContainerHeader>
      <ContainerContent columnize={3}>
        <ContainerColumn>
          <p>Take a sit. How can I help you?</p>
        </ContainerColumn>
        <ContainerColumn>Your name + Email</ContainerColumn>
        <ContainerColumn>Your message + Send your message</ContainerColumn>
      </ContainerContent>
    </Container>
  )
}


const StyledLicenseLink = styled(Link)`
  color: ${props => rgba(props.theme.palette.primary, .6)};

  &:hover {
    color: ${props => props.theme.palette.primary};
  }

  ${FontAwesomeIcon} {
    margin-right: 1rem;
    transition: color 300ms;
    font-size: 3rem;

    &:last-child {
      margin-right: 0;
    }
  }
`

const LicenseLink = props => {
  return (
    <StyledLicenseLink href="https://creativecommons.org/licenses/by/4.0/" rel="license" external {...props} />
  )
}


const CopyrightDisclaimer = props => {
  return (
    <Container as="footer" secondary small noHeader>
      <ContainerContent columnize={2}>
        <ContainerColumn>
          <p>
            This blog is made with{" "}
            <Link to="https://www.gatsbyjs.org/" title="gatsby" external />, hosted in{" "}
            <Link to="https://github.com/calderon/blog" title="github" me external /> and
            deployed to <Link to="https://www.netlify.com" title="netlify" external />.
          </p>
        </ContainerColumn>

        <ContainerColumn textRight>
          <LicenseLink>
            <FontAwesomeIcon icon={faCreativeCommons} />
            <FontAwesomeIcon icon={faCreativeCommonsBy} />
          </LicenseLink>
        </ContainerColumn>
      </ContainerContent>
    </Container>
  )
}

const Footer = props => {
  return (
    <>
      <ContactMe />
      <ExternalLinks />
      <CopyrightDisclaimer />
    </>
  )
}

export default Footer
