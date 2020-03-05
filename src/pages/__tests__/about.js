import React from "react"
import { render } from "@testing-library/react"

import About from "../"

const renderComponent = ({ ...props } = {}) => render(<About {...props} />)

describe("About", () => {
  it("renders correctly", () => {
    const about = renderComponent()
    expect(about).toMatchSnapshot()
  })
})
