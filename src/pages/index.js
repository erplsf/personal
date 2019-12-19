import React from "react"
import { Helmet } from "react-helmet"
import CentralContainer from "../components/layout_containers"

import Motto from "../components/motto"

export default () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
        <title>Andriy Mykhaylyk | Software Conjurer </title>
    </Helmet>
    <CentralContainer>
      <Motto>Do the work. Improve the process. Repeat.</Motto>
    </CentralContainer>
  </>
)
