import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { devices } from "../../assets/styles/helpers"

import Heading from "../Heading"
import List from "../List"

const StyledHeader = styled.header`
  grid-column-start: 1;
  grid-column-end: 4;
  background-color: ${props => props.theme.colors.bright};
  padding: 0 2.5rem;

  @media ${devices.lg} {
    padding: 0 5rem;
  }
`

const HeaderTitle = styled(Heading)`
  font-size: 3.6rem;
  font-weight: 700;
  letter-spacing: 0.13rem;
  line-height: 1.5;
  text-transform: lowercase;
  margin: 0;

  a {
    color: inherit;
    text-decoration: none;
  }
`

const HeaderNavigation = styled.nav``
const HeaderMenu = styled(List)`
  & > li {
    margin-bottom: 1.25rem;

    &:last-child {
      margin-bottom: 0;
    }

    @media ${devices.lg} {
      display: inline;
      margin-bottom: 0;
    }
  }
`
const HeaderMenuItem = styled.li`
  font-size: 1.6rem;
  text-transform: lowercase;

  @media ${devices.lg} {
    margin-right: 2.5rem;
  }

  .header__navigation__link {
    color: ${props => props.theme.colors.link};
  }
`

const Header = props => {
  return (
    <StyledHeader className="header">
      <HeaderTitle className="header__title">
        <Link className="header__title__link" to="/">
          Daniel Calderón
        </Link>
      </HeaderTitle>

      <HeaderNavigation className="header__navigation">
        <Heading className="header__navigation_title" srOnly>
          Navigation menu
        </Heading>

        <HeaderMenu className="header__navigation__list" unstyled>
          <HeaderMenuItem>
            <Link
              className="header__navigation__link header__navigation__link--blog"
              to="/"
            >
              Blog
            </Link>
          </HeaderMenuItem>
          <HeaderMenuItem>
            <Link
              className="header__navigation__link header__navigation__link--about"
              to="/about"
            >
              About me
            </Link>
          </HeaderMenuItem>
        </HeaderMenu>
      </HeaderNavigation>
    </StyledHeader>
  )
}

export default Header
