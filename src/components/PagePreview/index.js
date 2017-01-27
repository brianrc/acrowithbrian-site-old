import React, { PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

const PagePreview = ({ __url, title, thumbnail }) => {

  return (
    <div className={ styles.blogItem }>
      <Link to={ __url } className={ styles.thumbnail }>
        <img src={thumbnail} title="" height="640" width="480" />
      </Link>
      <Link to={ __url } className={ styles.title }>
        { title }
      </Link>
    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
}

export default PagePreview
