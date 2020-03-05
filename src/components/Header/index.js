import React from "react"
import { Link } from "gatsby"

import Heading from "../Heading"

const Header = props => {
  return (
    <header className="header">
      <Heading className="header__title">Daniel Calderón's blog</Heading>

      <nav className="header__navigation">
        <Heading className="heading--h1 header__navigation_title">
          Navigation menu
        </Heading>

        <ul className="header__navigation__list">
          <li>
            <Link
              className="header__navigation__link header__navigation__link--blog"
              to="/"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="header__navigation__link header__navigation__link--about"
              to="/about"
            >
              About me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
