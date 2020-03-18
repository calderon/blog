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
    ${srOnly};
  }
`

const skipLink = css`
  ${srOnly};
  ${srOnlyFocusable};
`

const _breakpoints = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 840,
  xl: 1024,
}

const devices = {
  xs: `(min-width: ${_breakpoints.xs}px)`,
  sm: `(min-width: ${_breakpoints.sm}px)`,
  md: `(min-width: ${_breakpoints.md}px)`,
  lg: `(min-width: ${_breakpoints.lg}px)`,
  xl: `(min-width: ${_breakpoints.xl}px)`,
}

export { srOnly, srOnlyFocusable, skipLink, devices }
