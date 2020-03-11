import React from "react"

import Header from "../components/Header"

const LayoutDefault = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
    </React.Fragment>
  )
}

export default LayoutDefault
