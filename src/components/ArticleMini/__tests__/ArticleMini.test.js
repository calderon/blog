import React from "react"
import { render } from "../../../../__tests__/helpers/render"

import ArticleMini from "../"

const renderComponent = ({ article = {}, ...props } = {}) => render(<ArticleMini article={article} {...props} />)

describe("ArticleMini", () => {
  const article = {
    frontmatter: {
      title: "",
      summary: ""
    }
  }

  it("renders correctly", () => {
    const articleComponent = renderComponent({ article })
    expect(articleComponent).toMatchSnapshot()
  })
})
