import React, { PropTypes } from "react"
import styles from "./index.css"

const PageHero = ( {head} ) => {
const pageDate = head.date ? new Date(head.date.replace(/-/g, '\/').replace(/T.+/, '')) : null

return (
    <div
      className={ styles.hero }
      style={ head.hero && {
        background: `linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0) ), url(${ head.hero }) 50% 50% / cover`,
        backgroundColor: '#999',
      } }
    >
      <div className={ styles.header }>
        <div className={ styles.wrapper }>
          <h1 className={ styles.heading }>{ head.title }</h1>
          {
            pageDate &&
            <div className={ styles.metaContainer }>
              <time key={ pageDate.toISOString() }>
                { pageDate.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'}) }
              </time>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

PageHero.propTypes = {
  head: PropTypes.object.isRequired,
}

export default PageHero
