import React from "react"
import { render } from "../../../../__tests__/helpers/render"

import { Link } from "../"

const renderComponent = ({ to = "", ...props } = {}) =>
  render(<Link to={to} {...props} />)

describe("Link", () => {
  it("renders correctly", () => {
    const link = renderComponent()
    expect(link).toMatchSnapshot()
  })
})
