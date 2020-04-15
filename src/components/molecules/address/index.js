import React from 'react'
import shortid from 'shortid'
import Dates from '../../atoms/dates'

const Address = ({ event }) => {

  const renderAddress = () => {
    console.log(event);
    
    if(event.regular) {
      return event.regularVenue.map((v, i) => (
        <>
          <Dates dates={v.weekdays} key={shortid.generate()}/>
          <p key={shortid.generate()}>{v.location}</p>
        </>
        )
      )
    }
    else return event.location
  }
  return renderAddress()
}

export default Address