import React from "react"
import { render } from "@testing-library/react"

import theme from "../../src/theme"
import { ThemeProvider } from "styled-components"

const renderWithTheme = component =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)

export * from "@testing-library/react"
export { renderWithTheme as render }
