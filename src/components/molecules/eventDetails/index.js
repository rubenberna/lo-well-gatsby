import React from 'react'
import shortid from 'shortid'
import Dates from '../../atoms/dates'

const EventDetails = ({ event }) => {

  const renderEventDetails = () => {    
    if(event.regular) return (
      <>
        <p>Price: €{event.price}</p>
        {event.regularVenue.map((v, i) => (
          <div key={shortid.generate()}>
            <Dates dates={v.weekdays} />
            <p key={shortid.generate()}>{v.location}</p>
          </div>
          )
        )}
      </>
    )
    else return (
      <>
        <p>Price: €{event.price}</p>
        <p>{event.location}</p>
      </>
    )
  }
  return renderEventDetails()
}

export default EventDetails