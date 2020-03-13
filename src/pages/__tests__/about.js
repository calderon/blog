import React from "react"
import { render } from "../../../__tests__/helpers/render"

import About from "../"

const renderComponent = ({ ...props } = {}) => render(<About {...props} />)

describe("About", () => {
  it("renders correctly", () => {
    const about = renderComponent()
    expect(about).toMatchSnapshot()
  })
})
