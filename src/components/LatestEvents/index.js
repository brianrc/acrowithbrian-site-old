import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import { Link } from "phenomic"

import styles from "./index.css"

const defaultNumberOfPosts = 3

const LatestEvents = (props, { collection }) => {
  const latestEvents = enhanceCollection(collection, {
    filter: { layout: "Event" },
    sort: "date",
    reverse: true,
  })
  .slice(0, props.numberOfPosts || defaultNumberOfPosts)

  return (
    <div>
        {
        latestEvents.length
        ? (
          <ul className={ styles.list }>
            {
            latestEvents.map((event) => (
              <li key={ event.title }>
                <Link to={ event.__url } className={ styles.title }>
                  { event.title }
                </Link>
                <p>{ event.start }</p>
              </li>
            ))
          }
          </ul>
        )
        : "No upcoming events yet."
      }
    </div>
  )
}

LatestEvents.propTypes = {
  numberOfPosts: PropTypes.number,
}

LatestEvents.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default LatestEvents
