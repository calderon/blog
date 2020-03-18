import React from "react"
import styled, { css } from "styled-components"

import { srOnly } from "../../assets/styles/helpers"

const Heading = styled.h1.attrs(props => ({
  className: `heading heading--${props.as || 'h1'}`,
}))`
  ${props => (props.srOnly ? srOnly : css`
    margin: 0;
    font-weight: 700;

    small {
      font-weight: 500;
    }
  `)};
`

export default Heading;
