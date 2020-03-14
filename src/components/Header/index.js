import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Heading from "../Heading"

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

const Header = props => {
  return (
    <header className="header">
      <HeaderTitle className="header__title">
        <Link className="header__title__link" to="/">
          Daniel Calderón
        </Link>
      </HeaderTitle>
    </header>
  )
}

export default Header
