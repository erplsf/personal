import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  centralContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
})

const CentralContainer = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.centralContainer}>{children}</div>
}

export default CentralContainer
