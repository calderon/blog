import React from "react"
import { render } from "../../../../__tests__/helpers/render"

import { Welcome } from "../"

const renderComponent = ({ ...props } = {}) => render(<Welcome {...props} />)

describe("Welcome", () => {
  it("renders correctly", () => {
    const welcome = renderComponent()
    expect(welcome).toMatchSnapshot()
  })
})
