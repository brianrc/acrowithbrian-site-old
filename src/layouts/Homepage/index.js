import React, {PropTypes} from "react"

import LatestPosts from "../../components/LatestPosts"
import Page from "../Page"
import PageHero from "../../components/PageHero"

const Homepage = (props) => {
  const {head} = props;
  return (
    <Page { ...props }>
      <PageHero head={head }/>
      <LatestPosts />
    </Page>
  )
}

Homepage.propTypes = {
  head: PropTypes.object,
}

export default Homepage
