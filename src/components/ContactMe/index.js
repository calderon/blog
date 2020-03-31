import React from "react"

import {
  Container,
  ContainerHeader,
  ContainerHeading,
  ContainerMain,
  ContainerColumn,
} from "../Container"

const ContactMe = props => {
  return (
    <Container as="aside" id="contact" main primary>
      <ContainerHeader>
        <ContainerHeading>Contact me</ContainerHeading>
      </ContainerHeader>
      <ContainerMain columnize={3}>
        <ContainerColumn>
          <p>Take a sit. How can I help you?</p>
        </ContainerColumn>
        <ContainerColumn>Your name + Email</ContainerColumn>
        <ContainerColumn>Your message + Send your message</ContainerColumn>
      </ContainerMain>
    </Container>
  )
}

export default ContactMe
