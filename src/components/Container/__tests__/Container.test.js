import React from "react"
import { render } from "../../../../__tests__/helpers/render"

import { Container } from "../"

const renderComponent = ({ ...props } = {}) => render(<Container {...props} />)

describe("Container", () => {
  it("renders correctly", () => {
    const container = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
