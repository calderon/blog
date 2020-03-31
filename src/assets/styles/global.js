import { config, dom } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

import { srOnly } from "../../assets/styles/helpers"

const GlobalStyle = createGlobalStyle`
  ${normalize}

  ${dom.css()}

  * {
    &,
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: ${props => props.theme.font.base};
    letter-spacing: 0.12em;
    line-height: 1.5;
    word-spacing: 0.16em;
    background-color: ${props => props.theme.colors.light};
  }

  figure {
    margin: 1rem 0 2rem;
    padding: .5rem;
    border: .2rem solid ${props => props.theme.colors.light};
    display: inline-block;

    img {
      vertical-align: middle;
      max-width: 100%;
    }
  }

  p {
    margin: 0 0 1rem 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .copyright {
    display: inline-block;
  }

  .unscrolled {
    overflow: hidden;
  }

  .srOnly {
    ${srOnly};
  }
`

export default GlobalStyle
