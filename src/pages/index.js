import React from "react"
import { Helmet } from "react-helmet"
import CentralContainer from "../components/layout_containers"

import Motto from "../components/motto"

export default () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
        <title>Andriy Mykhaylyk | Multicore General </title>
    </Helmet>
    <CentralContainer>
      <Motto>Solve. Improve. Repeat</Motto>
    </CentralContainer>
  </>
)
