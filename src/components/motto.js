import React from "react"
import "typeface-bai-jamjuree"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  mottoText: {
    fontSize: "xx-large",
    fontFamily: ["Bai Jamjuree", "sans-serif"],
  },
})

export default ({ children }) => {
  const classes = useStyles()
  return <div className={classes.mottoText}>{children}</div>
}
