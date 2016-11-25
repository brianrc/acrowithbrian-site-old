import React, { PropTypes } from "react"
import styles from "./index.css"

const PageHero = ( {head} ) => {

return (

    <div
      className={ styles.hero }
      style={ head.hero && {
        background: `#111 url(${ head.hero }) 50% 50% / cover`,
      } }
    >
      <div className={ styles.header }>
        <div className={ styles.wrapper }>
          <h1 className={ styles.heading }>{ head.title }</h1>
        </div>
      </div>
    </div>
  )
}

PageHero.propTypes = {
  head: PropTypes.object.isRequired,
}

export default PageHero
