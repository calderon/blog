import React from "react"
import { render } from "../../../../__tests__/helpers/render"

import FontAwesomeIcon from "../"
import {
  faCoffee
} from "@fortawesome/free-solid-svg-icons"

const renderComponent = ({ icon = {}, ...props } = {}) => render(<FontAwesomeIcon icon={icon} {...props} />)

describe("FontAwesomeIcon", () => {
  it("renders correctly", () => {
    const icon = renderComponent({ icon: faCoffee })
    expect(icon).toMatchSnapshot()
  })
})
