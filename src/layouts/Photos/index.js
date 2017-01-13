import React from "react"

import Page from "../Page"
// import styles from "./index.css"

import Gallery from 'react-grid-gallery'
import images from '../../../content/assets/photo-gallery/images.js'

const Photos = (props) => {
  return (
    <div>
      <Page
        { ...props }
      >
      </Page>
      <Gallery images={images} enableImageSelection={false} backdropClosesModal={true} rowHeight={400} lightboxWidth={1536} />
    </div>
  )
}

export default Photos
