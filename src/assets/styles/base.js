import { createGlobalStyle } from "styled-components"

import { srOnly, srOnlyFocusable, skipLink } from "../../assets/styles/helpers"

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

  .srOnlyFocusable {
    ${srOnly};
  }

  .skipLink {
    ${skipLink};
  }
`

export default BaseStyle
