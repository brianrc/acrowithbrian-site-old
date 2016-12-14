import React, { PropTypes } from "react"

import Page from "../Page"
// import styles from "./index.css"
import Gallery from 'react-grid-gallery'

const IMAGES = require('../../../content/assets/photo-gallery/images.js').IMAGES;

const Photos = (props) => {
  // const { head } = props;

  return (
    <div>
    <Page
      { ...props }
    >
    </Page>
    <Gallery images={IMAGES} enableImageSelection={false} backdropClosesModal={true} />
    </div>
  )
}

Photos.propTypes = {
  props: PropTypes.any,
  head: PropTypes.object.isRequired,
  title: PropTypes.string,
  body: PropTypes.string,
}

export default Photos
