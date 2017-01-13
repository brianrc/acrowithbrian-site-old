import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import { Link } from "phenomic"

// import styles from "./index.css"


const LatestEvents = (props, { collection }) => {
  const latestEvents = enhanceCollection(collection, {
    filter: (prop) => prop.layout === "Event" && new Date(prop.date).getTime() > (Date.now() - 86400000),
    sort: "date",
    limit: 3,
  })


  return (
    <div>
        {
        latestEvents.length
        ? (
          <ul className={ props.className }>
          {
            latestEvents.map((event) => (
              <li key={ event.title }>
                <Link to={ event.__url }>
                  { event.title }
                </Link>
                <p>{ new Date(event.start).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'}) }</p>
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

LatestEvents.contextTypes = {
  collection: PropTypes.array.isRequired,
}

LatestEvents.propTypes = {
  className: PropTypes.object,
}

export default LatestEvents
