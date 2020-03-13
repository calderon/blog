import React from "react"
import { render } from "../../../__tests__/helpers/render"

import Home from "../"

const renderComponent = ({ ...props } = {}) => render(<Home {...props} />)

describe("Home", () => {
  it("renders correctly", () => {
    const home = renderComponent()
    expect(home).toMatchSnapshot()
  })
})
