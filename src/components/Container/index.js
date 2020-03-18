import React from "react"
import styled, { css } from "styled-components"
import { rgba } from "polished"

import { devices } from "../../assets/styles/helpers"

import Heading from "../Heading"

const Container = styled.section`
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-bottom: 3.8rem;
  font-size: 1.8rem;

  @media ${devices.lg} {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  ${props =>
    props.primary &&
    css`
      background-color: ${props => props.theme.palette.primary};
      color: ${props => props.theme.colors.bright};
    `}

  ${props =>
    props.secondary &&
    css`
      background-color: ${props => props.theme.palette.secondary};
      color: ${props => props.theme.palette.primary};
    `}

  ${props =>
    props.tertiary &&
    css`
      background-color: ${props => props.theme.palette.tertiary};
      color: ${props => props.theme.palette.primary};

      a {
        color: ${props => props.theme.palette.quaternary}
      }
    `}

  ${props =>
    props.bright &&
    css`
      background-color: ${props => props.theme.colors.bright};
      color: ${props => rgba(props.theme.palette.primary, 0.6)};

      .heading {
        color: ${props => props.theme.palette.primary};
      }

      a {
        color: ${props => props.theme.palette.quaternary}
      }

      mark {
        color: ${props => props.theme.palette.primary};
        background: none;
      }
    `}

  ${props => props.main ? css`
    grid-column-start: 1;
    grid-column-end: 4;
  ` : css`
    grid-column-start: 1;
    grid-column-end: 2;
  `}

  ${props => props.inline && css`
    padding-bottom: 0;

    @media ${devices.lg} {
      display: flex;
      align-items: center;
      height: 7.5rem;
    }

    .heading {
      display: inline-flex;
      align-items: center;
      height: 7.5rem;

      @media ${devices.lg} {
        margin-right: 4rem;
        height: auto;
      }
    }
  `}
`

const ContainerHeader = styled.header`
  min-height: 7.5rem;
  display: inline-flex;
  align-items: center;
`

const ContainerHeading = styled(Heading)`
  font-size: 2.4rem;
  text-transform: lowercase;
`

const ContainerMain = styled.div`
  ${props => props.columnize && css`
    display: grid;
    grid-template-columns: repeat(${props => props.columnize}, 1fr);
    grid-gap: 2.5rem;

    @media ${devices.lg} {
      grid-gap: 5rem;
    }

    & > * {
      grid-column-start: 1;
      grid-column-end: ${props => props.columnize + 1};

      @media ${devices.lg} {
        grid-column-start: auto;
        grid-column-end: auto;
      }
    }
  `}
`

export { Container, ContainerHeader, ContainerHeading, ContainerMain }
