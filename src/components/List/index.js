import React from "react"
import styled, { css } from "styled-components"

const List = styled.ul.attrs(props => ({
  className: "list",
}))`
  margin: 0;

  ${props =>
    props.unstyled &&
    css`
      list-style: none;
      padding-left: 0;
    `}

  ${props =>
    props.inline &&
    css`
      & > li {
        display: inline;
      }
    `}

  ${props =>
    props.inlineBlock &&
    css`
      & > li {
        display: inline-block;
      }
    `}
`

export default List
