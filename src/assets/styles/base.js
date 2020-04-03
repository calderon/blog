import { createGlobalStyle } from "styled-components"

import { srOnly } from "../../assets/styles/helpers"

const BaseStyle = createGlobalStyle`
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

export default BaseStyle
