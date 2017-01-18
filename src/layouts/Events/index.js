import React, { Component, PropTypes } from "react"

import Page from "../Page"
import styles from "./index.css"

import BigCalendar from 'react-big-calendar';
import './react-big-calendar.global.css';
import moment from 'moment';

import enhanceCollection from "phenomic/lib/enhance-collection"
import {browserHistory} from "phenomic/lib/client"
BigCalendar.momentLocalizer(moment)

class Events extends Component {
  constructor() {
    super()
  }
  static contextTypes = {
    collection: PropTypes.array,
  };


  render() {
    const { collection } = this.context
    const events = enhanceCollection(collection, {
      filter: { layout: "Event" },
      sort: "date",
      reverse: true,
    })
    // event dates need to be converted into date objects for BigCalendar
    events.forEach(
      function(event) {
        event.start = new Date(event.start)
        event.end = new Date(event.end)
      }
    )

    return (
      <div>
        <Page
          { ...this.props }
        >
        </Page>
        <div className={styles.container}>
          <BigCalendar
            eventPropGetter={event => ({className: ['cat-' + event.category.toLowerCase(), event.teaching ? 'teaching':''] })}
            selectable
            events={events}
            timeslots={1}
            step={60}
            onSelectEvent={event => browserHistory.push(event.__url)}
            formats={{dayFormat: 'ddd M/D'}}
          />
        </div>
      </div>
    )
  }
}

export default Events
