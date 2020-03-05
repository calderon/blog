import React from "react"

const Heading = props => {
  const tagName = props.as || "h1"

  return React.createElement(
    tagName,
    {
      className: props.className + ` heading heading--${tagName}`,
    },
    props.children
  )
}

export default Heading
