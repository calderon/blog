import React from "react"
import styled from "styled-components"

import Layout from "../components/layoutDefault"

import me from "../assets/images/daniel-calderon.jpg"

import { Link } from "../components/Link"
import Heading from "../components/Heading"
import { Welcome } from "../components/Welcome"
import ContactMe from "../components/ContactMe"
import ExternalLinks from "../components/ExternalLinks"

const About = props => {
  return (
    <Layout>
      <main>
        <Welcome bright>
          <Heading as="h2">Hi, my name is Daniel Calderón.</Heading>

          <figure>
            <img src={me} alt="A picture of Daniel Calderon" title="It's me!" />
            <figcaption className="srOnly">
              A picture of Daniel Calderon
            </figcaption>
          </figure>

          <p>
            I'm a Front-end engineer freelancer from Spain, focused on web
            development.
          </p>
          <p>
            Currently, working at{" "}
            <Link
              to="https://www.avallain.com/"
              rel="external noreferrer"
              title="Avallain"
            />
            , developing e-learning products for clients around the world, as{" "}
            <Link
              to="https://richmondlp.com/"
              rel="external noreferrer"
              title="Richmond"
            />{" "}
            or{" "}
            <Link
              to="https://global.oup.com"
              rel="external noreferrer"
              title="Oxford University Press"
            />
            .
          </p>
          <p>
            At the beginning of my career, I had the opportunity to take one of
            the best design courses in Spain,{" "}
            <Link
              to="https://www.terremoto.net/programa-vostok"
              rel="external noreferrer"
              title="Programa Vostok"
              hreflang="es"
            />
            , taught by{" "}
            <Link
              to="https://www.terremoto.net/javier-canada"
              rel="external noreferrer"
              title="Javier Cañada"
              hreflang="es"
            />
            .
          </p>
          <p>
            This course allowed me to acquire a deep knowledge about interface
            and product design. At the same time, I worked as{" "}
            <abbr lang="en" title="User Interface">
              UI
            </abbr>{" "}
            designer at{" "}
            <Link
              to="https://secuoyas.com/"
              rel="external noreferrer"
              title="Secuoyas"
              hreflang="es"
            />
            , being involved in public and private products.
          </p>
          <p>
            After my foray into design, I decided to return to my developer
            side, being a partner and part of one of the first agile companies
            in my own city, working with Rails to develop cross-platform
            websites.
          </p>
          <p>
            That's when I decided to began my journey as a font-end freelancer,
            working on important companies such{" "}
            <Link
              to="https://www.jobandtalent.com"
              rel="external noreferrer"
              title="jobandtalent"
            />
            , a digital temp staffing agency online, where I started to became a{" "}
            <abbr title="Javascript">JS</abbr> developer working with{" "}
            <abbr lang="en" title="ECMAScript 6">
              ES6
            </abbr>{" "}
            and{" "}
            <Link
              to="https://nodejs.org/en/"
              rel="external noreferrer"
              title="Node.js"
            />
            .
          </p>
          <p>
            Nowadays, at{" "}
            <Link
              to="https://www.avallain.com/"
              rel="external noreferrer"
              title="Avallain"
            />
            , I'm developing e-learning solutions for important clients and
            training up in React and Gatsby, improving my javascript skills.
          </p>
        </Welcome>
      </main>

      <ContactMe />
      <ExternalLinks />
    </Layout>
  )
}

export default About
