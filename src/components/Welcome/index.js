import styled from "styled-components"

import { devices } from "../../assets/styles/helpers"

import { Container } from "../Container"

export const Welcome = styled(Container)`
  padding-top: 4.5rem;
  padding-bottom: 6rem;

  @media ${devices.lg} {
    padding-top: 9rem;
    padding-bottom: 11.5rem;
  }
`
