import React from "react"
import { render } from "../../../../__tests__/helpers/render"

import ExternalLinks from "../"

const renderComponent = ({ ...props } = {}) =>
  render(<ExternalLinks {...props} />)

describe("ExternalLinks", () => {
  it("renders correctly", () => {
    const externalLinks = renderComponent()
    expect(externalLinks).toMatchSnapshot()
  })
})
