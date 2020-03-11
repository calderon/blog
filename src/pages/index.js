import React from "react"

import Layout from "../components/layoutDefault"

const Home = props => {
  return (
    <Layout>
      <p>Hello! Welcome to my new coding lab, my own personal site.</p>
      <p>Here you can see the progress of #100DaysOfGatsby challenges.</p>

      <p>It is automatically deployed by using github actions.</p>

      <p>
        You can find out the project on{" "}
        <a href="https://github.com/calderon/blog">github</a>.
      </p>
    </Layout>
  )
}

export default Home
