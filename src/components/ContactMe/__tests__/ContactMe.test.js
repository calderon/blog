import React from "react"
import { render } from "../../../../__tests__/helpers/render"

import ContactMe from "../"

const renderComponent = ({ ...props } = {}) => render(<ContactMe {...props} />)

describe("ContactMe", () => {
  it("renders correctly", () => {
    const contactMe = renderComponent()
    expect(contactMe).toMatchSnapshot()
  })
})
