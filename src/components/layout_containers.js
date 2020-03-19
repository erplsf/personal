import React from "react"
import { styled } from 'linaria/react'

const ContainerStyle = styled.div`
  position: "absolute",
  top: "50%",
  left: "50%",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)"
`

const CentralContainer = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>
}

export default CentralContainer
