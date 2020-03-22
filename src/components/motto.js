import React from "react"
import "typeface-bai-jamjuree"
import { styled } from 'linaria/react'

const MottoTextStyle = styled.div`
  font-size: xx-large;
  font-family: "Bai Jamjuree", sans-serif;
`

export default ({ children }) => {
  return <MottoTextStyle>{children}</MottoTextStyle>
}
