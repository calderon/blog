import React from "react"
import { render } from "../../../__tests__/helpers/render"

import Blog from "../blog"

const renderComponent = ({ ...props } = {}) => render(<Blog {...props} />)

describe("Blog", () => {
  it("renders correctly", () => {
    const blog = renderComponent()
    expect(blog).toMatchSnapshot()
  })
})
