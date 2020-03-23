import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

import { devices, srOnly } from "../../assets/styles/helpers"

const linkStyles = css`
  color: ${props => props.theme.palette.quaternary};

  &:hover {
    color: ${props => props.theme.palette.quinary};
  }
`

const StyledLink = styled.a`
  ${linkStyles}
`

const StyledInternalLink = styled(Link)`
  ${linkStyles}
`

const CustomLink = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  ...other
}) => {
  // Tailor the following test to your environment.
  // Assuming that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  //
  // source: https://www.gatsbyjs.org/docs/gatsby-link/#use-link-only-for-internal-links

  const isInternal = to && /^\/(?!\/)/.test(to)

  if (isInternal) {
    return (
      <StyledInternalLink to={to} {...other}>
        {children}
      </StyledInternalLink>
    )
  }

  return (
    <StyledLink href={to} {...other}>
      {children}
    </StyledLink>
  )
}

const AnchorLinkText = styled.span``

const StyledAnchor = styled(StyledLink)`
  @media ${props => devices[props.hiddenFrom || "lg"]} {
    display: none;
  }

  ${AnchorLinkText} {
    ${srOnly};
  }
`

const AnchorLink = props => {
  return <StyledAnchor {...props} />
}

const ExternalLink = props => {
  return (
    <CustomLink rel={`external ${props.me ? "me" : ""}`} {...props}>
      {props.children ? props.children : props.title}
    </CustomLink>
  )
}

export { CustomLink as Link, ExternalLink, AnchorLink, AnchorLinkText }
