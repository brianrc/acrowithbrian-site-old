import React from "react"
import { Route } from "react-router"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import AppContainer from "./AppContainer"
import Page from "./layouts/Page"
import PageError from "./layouts/PageError"
import Homepage from "./layouts/Homepage"
import Blog from "./layouts/Blog"
import Photos from "./layouts/Photos"
import Post from "./layouts/Post"
import Events from "./layouts/Events"
import Event from "./layouts/Event"
import Contact from "./layouts/Contact"

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Page,
      PageError,
      Homepage,
      Blog,
      Post,
      Photos,
      Events,
      Event,
      Contact,
    }}
  />
)

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
)
