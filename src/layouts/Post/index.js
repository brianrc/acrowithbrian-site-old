import React, { PropTypes } from "react"

//import LatestPosts from "../../components/LatestPosts"
import Page from "../Page"

import styles from "./index.css"

const Post = (props) => {

  const postAuthor = props.head.author;

  return (
    <Page
      { ...props }
      header={
        <div>
          <header className={ styles.header }>
            {
              postAuthor &&
              <div className={ styles.metaContainer }>
                {
                  'By ' + postAuthor
                }
              </div>
            }
          </header>

          <hr />
        </div>
      }
    >
      <hr />
      {/* <LatestPosts /> */}
    </Page>
  )
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Post
