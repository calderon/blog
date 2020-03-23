import React, { useState, useLayoutEffect } from "react"
import styled from "styled-components"
import { rgba } from "polished"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBars,
  faTimesCircle,
  faNewspaper,
  faAddressCard,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"

import { devices } from "../../assets/styles/helpers"

import Heading from "../Heading"
import { Link, AnchorLink, AnchorLinkText } from "../Link"
import List from "../List"

const StyledHeader = styled.header.attrs(props => ({
  className: "header",
}))`
  grid-column-start: 1;
  grid-column-end: 4;
  background-color: ${props => props.theme.colors.bright};
  padding: 0 2.5rem;
  height: 7.5rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;

  @media ${devices.lg} {
    padding: 0 5rem;
  }

  &::before,
  &::after {
    content: "";
    height: 0.1rem;
    background: rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 100%;
  }

  &::before {
    left: 50%;
    right: 50%;
    transition: left 300ms;
  }

  &::after {
    left: 50%;
    right: 50%;
    transition: right 300ms;
  }

  &.header--scrolled {
    &::before {
      left: 0;
    }

    &::after {
      right: 0;
    }
  }
`

const HeaderTitle = styled(Heading)`
  font-size: 3.6rem;
  font-weight: 700;
  letter-spacing: 0.13rem;
  line-height: 1.5;
  text-transform: lowercase;
  margin: 0;
  flex: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`

const HeaderMenu = styled(List)``

const HeaderMenuItem = styled.li`
  font-size: 3rem;
  text-transform: lowercase;
  margin-bottom: 1.25rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media ${devices.lg} {
    font-size: 1.6rem;
    margin-right: 2.5rem;
    display: inline;
    margin-bottom: 0;
  }

  .header__navigation__link__icon {
    display: none;

    @media ${devices.lg} {
      display: inline-block;
      font-size: 2.4rem;
      vertical-align: middle;
      margin-right: 1rem;
    }
  }
`

const HeaderNavigation = styled.nav`
  &:not(.header__navigation--menuVisible) {
    .header__navigation__anchor--hideMenu {
      display: none;
    }
  }

  &.header__navigation--menuVisible {
    .header__navigation__anchor--showMenu {
      display: none;
    }

    ${HeaderMenu} {
      display: block;
      text-align: center;
      background: ${props => rgba(props.theme.colors.bright, 0.95)};
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 7.5rem 5rem 5rem 5rem;
    }
  }

  ${HeaderMenu} {
    display: none;

    @media ${devices.lg} {
      display: block;
    }
  }

  ${AnchorLink} {
    font-size: 2.4rem;
    color: ${props => props.theme.palette.primary};

    &:hover {
      color: ${props => props.theme.palette.quinary};
    }
  }

  .header__navigation__anchor--hideMenu {
    position: relative;
  }
`

const Header = props => {
  const [scrolled, setScrolled] = useState(false)

  useLayoutEffect(() => {
    const handleScroll = e => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleShowMenu = e => {
    e.preventDefault()

    document
      .querySelector(".header__navigation")
      .classList.add("header__navigation--menuVisible")

    document.body.classList.add("unscrolled")
  }

  const handleCloseMenu = e => {
    e.preventDefault()

    document
      .querySelector(".header__navigation")
      .classList.remove("header__navigation--menuVisible")

    document.body.classList.remove("unscrolled")
  }

  return (
    <StyledHeader className={scrolled ? "header--scrolled" : ""}>
      <HeaderTitle className="header__title">
        <Link className="header__title__link" to="/">
          Daniel Calderón
        </Link>
      </HeaderTitle>

      <HeaderNavigation className="header__navigation">
        <AnchorLink
          to="#headerMenu"
          className="header__navigation__anchor header__navigation__anchor--showMenu"
          hiddenFrom="lg"
          onClick={handleShowMenu}
        >
          <AnchorLinkText>Go to navigation menu</AnchorLinkText>
          <FontAwesomeIcon icon={faBars} />
        </AnchorLink>

        <Heading className="header__navigation_title" srOnly>
          Navigation menu
        </Heading>

        <HeaderMenu
          id="headerMenu"
          className="header__navigation__list"
          unstyled
        >
          <HeaderMenuItem>
            <Link
              className="header__navigation__link header__navigation__link--blog"
              to="/blog"
            >
              <FontAwesomeIcon
                icon={faNewspaper}
                className="header__navigation__link__icon"
              />
              Blog
            </Link>
          </HeaderMenuItem>
          <HeaderMenuItem>
            <Link
              className="header__navigation__link header__navigation__link--about"
              to="/about"
            >
              <FontAwesomeIcon
                icon={faAddressCard}
                className="header__navigation__link__icon"
              />
              About me
            </Link>
          </HeaderMenuItem>
          <HeaderMenuItem>
            <Link
              className="header__navigation__link header__navigation__link--contact"
              to="#contact"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="header__navigation__link__icon"
              />
              contact
            </Link>
          </HeaderMenuItem>
        </HeaderMenu>

        <AnchorLink
          to="#headerMenu"
          className="header__navigation__anchor header__navigation__anchor--hideMenu"
          hiddenFrom="lg"
          onClick={handleCloseMenu}
        >
          <AnchorLinkText>Go up</AnchorLinkText>
          <FontAwesomeIcon icon={faTimesCircle} />
        </AnchorLink>
      </HeaderNavigation>
    </StyledHeader>
  )
}

export default Header
