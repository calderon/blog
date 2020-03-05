import React from "react"
import { render } from "@testing-library/react"

import Home from "../"

const renderComponent = ({ ...props } = {}) => render(<Home {...props} />)

describe("Home", () => {
  it("renders correctly", () => {
    const home = renderComponent()
    expect(home).toMatchSnapshot()
  })
})
