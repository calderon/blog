import React from "react"
import styled, { css } from "styled-components"

import { srOnly } from "../../assets/styles/mixins"

const StyledHeading = styled.h1.attrs(props => ({
  className: `heading heading--${props.as}`,
}))`
  color: ${props =>
    props.inverted ? props.theme.palette.primary : props.theme.palette.primary};

  ${props => (props.srOnly ? srOnly : "")};
`

const Heading = props => {
  return <StyledHeading as="h1" {...props} />
}

export default Heading
