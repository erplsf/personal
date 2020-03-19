import React from "react"
import "typeface-bai-jamjuree"
import { styled } from 'linaria/react'

const MottoTextStyle = styled.div`
  fontSize: "xx-large",
  fontFamily: ["Bai Jamjuree", "sans-serif"],
`

export default ({ children }) => {
  return <MottoTextStyle>{children}</MottoTextStyle>
}
