import { css } from "styled-components"

const srOnly = css`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
`

const srOnlyFocusable = css`
  &:not(:focus) {
    @include sr-only();
  }
`

const skipLink = css`
  ${srOnly};
  ${srOnlyFocusable};
`

export { srOnly, srOnlyFocusable, skipLink }
