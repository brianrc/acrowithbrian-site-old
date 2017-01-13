import React, { PropTypes } from "react"

import Page from "../Page"
import styles from "./index.css"

const Event = (props) => {
  const { category, start, end, location, address } = props.head;

  const mapIframe = `<iframe
                width="100%"
                height="300"
                frameborder="0" style="border:0"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDzq49VRIOq9h7ykw2GiwJrXW-zdKGQHVM
                  &q=` + encodeURIComponent(location +', '+ address) + `" allowfullscreen>
              </iframe>`;

  return (
    <div>
      <Page
        { ...props }
      >
        <div>
          <div className={ styles.metaContainer }>
            <div className={ styles.eventDetails }>
              <h3>Event Details</h3>
              <dl>
                <dt> Start: </dt>
                <dd>
                  <abbr title="2016-12-30">{ start.toString() }</abbr>
                </dd>

                <dt> End: </dt>
                <dd>
                  <abbr title="2017-01-01"> { end.toString() } </abbr>
                </dd>

                <dt>Category:</dt>
                <dd>
                  { category }
                </dd>
              </dl>
            </div>

            <div className={ styles.venueDetails }>
              <h3>Venue Details</h3>
              <dl>
                <dt> Location: </dt>
                <dd>
                  <abbr title="2016-12-30">{ location }</abbr>
                </dd>

                <dt> Address: </dt>
                <dd>
                  <abbr title="2017-01-01"> { address } </abbr>
                </dd>
              </dl>
            </div>
          </div>

          <div className={ styles.mapContainer } dangerouslySetInnerHTML={{
            __html: mapIframe
          }} />

        </div>
      </Page>

    </div>
  )
}

Event.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Event
