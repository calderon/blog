import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
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

  a {
    color: ${props => props.theme.palette.quaternary};

    &:hover {
      color: ${props => props.theme.palette.quinary};
    }
  }

  .copyright {
    display: inline-block;
  }
`

export default GlobalStyle
