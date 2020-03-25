import { config, dom } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

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
`

export default GlobalStyle
