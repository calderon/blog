import React from "react"
import { render } from "../../../../__tests__/helpers/render"

import List from "../"

const renderComponent = ({ ...props } = {}) => render(<List {...props} />)

describe("List", () => {
  it("renders correctly", () => {
    const list = renderComponent()
    expect(list).toMatchSnapshot()
  })
})
