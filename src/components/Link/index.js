import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

import { devices, skipLink } from "../../assets/styles/helpers"

const linkStyles = css`
  color: ${props => props.theme.palette.quaternary};

  &:hover {
    color: ${props => props.theme.palette.quinary};
  }
`

const StyledLink = styled.a`
  ${linkStyles}

  ${props =>
    props.srOnly &&
    css`
      ${skipLink};
    `}
`

const StyledInternalLink = styled(Link)`
  ${linkStyles}

  ${props =>
    props.srOnly &&
    css`
      ${skipLink};
    `}
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

  if ("target" in other && other.target === "_blank") {
    let rel = new Set(other.hasOwnProperty(rel) ? other.rel.split(" ") : [])
    rel.add("external")
    rel.add("noopener")
    rel.add("noreferrer")
    other.rel = [...rel].join(" ")
  }

  if (isInternal) {
    return (
      <StyledInternalLink to={to} {...other}>
        {children ? children : other.title ? other.title : ""}
      </StyledInternalLink>
    )
  }

  return (
    <StyledLink href={to} {...other}>
      {children ? children : other.title ? other.title : ""}
    </StyledLink>
  )
}

const AnchorLinkText = styled.span``

const StyledAnchor = styled(StyledLink)`
  cursor: pointer;

  ${props =>
    props.hiddenFrom &&
    css`
      @media ${props => devices[props.hiddenFrom]} {
        ${skipLink}
      }
    `}
`

export { CustomLink as Link, StyledAnchor as AnchorLink, AnchorLinkText }
