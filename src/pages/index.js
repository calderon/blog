import React from "react"

import Header from "../components/Header"

const Home = props => {
  return (
    <div className="page--home">
      <Header />
      <p>Hello! Welcome to my new coding lab, my own personal site.</p>
      <p>Here you can see the progress of #100DaysOfGatsby challenges.</p>

      <p>
        You can find out the project on{" "}
        <a href="https://github.com/calderon/blog">github</a>.
      </p>
    </div>
  )
}

export default Home
