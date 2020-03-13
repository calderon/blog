import React from "react"
import { render } from "../../../../__tests__/helpers/render"

import Header from "../"

const renderComponent = ({ ...props } = {}) => render(<Header {...props} />)

describe("Header", () => {
  it("renders correctly", () => {
    const header = renderComponent()
    expect(header).toMatchSnapshot()
  })
})
