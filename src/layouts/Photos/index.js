import React from "react"

import Page from "../Page"
// import styles from "./index.css"

import Gallery from 'react-grid-gallery'
const IMAGES = require('../../../content/assets/photo-gallery/images.js').IMAGES;

const Photos = (props) => {
  return (
    <div>
      <Page
        { ...props }
      >
      </Page>
      <Gallery images={IMAGES} enableImageSelection={false} backdropClosesModal={true} rowHeight={320} width={2048}/>
    </div>
  )
}

export default Photos
