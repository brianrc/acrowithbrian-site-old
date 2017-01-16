import React, { PropTypes } from "react"

import Page from "../Page"
import LatestPosts from "../../components/LatestPosts"
import styles from "./index.css"

const Blog = (props) => {
  // const { head } = props;

  return (
    <div>
      <Page
        { ...props }
      >
      </Page>
      <div className={ styles.wrapper }>
        <LatestPosts numberOfPosts="20" />
      </div>
    </div>
  )
}

Blog.propTypes = {
  props: PropTypes.any,
  head: PropTypes.object.isRequired,
  title: PropTypes.string,
  body: PropTypes.string,
}

export default Blog
