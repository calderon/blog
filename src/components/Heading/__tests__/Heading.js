import React from "react"
import { render } from "@testing-library/react"

import Heading from "../"

const renderComponent = ({ ...props } = {}) => render(<Heading {...props} />)

describe("Heading", () => {
  it("renders correctly", () => {
    const heading = renderComponent()
    expect(heading).toMatchSnapshot()
  })
})
