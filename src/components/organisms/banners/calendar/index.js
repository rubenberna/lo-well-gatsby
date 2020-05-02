import React, { useState, useEffect } from 'react'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { weekdaysList } from '../../../_helpers'

import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

const MyCalendar = ({ events }) => {
  const [irrEventsList, setIrrEventsList] = useState([])
  const [eventsList, setEventsList] = useState([])

  const irregularEvents = events.filter(ev => !ev.regular)
  const regularEvents = events.filter(ev => ev.regular)
  const regularVenues = regularEvents.map(ev => ({ venues: ev.regularVenue, name: ev.name }))

  useEffect(() => {
    console.log('irregular');
    irregularEvents.forEach(ev => {
      let item = {
        title: ev.name,
        start: ev.date,
        end: ev.date,
        allDay: true
      }
      let list = [...eventsList, item]
      setIrrEventsList(list)
    });
  }, [])

  useEffect(() => {
    console.log('regular');
    let list = []
    regularVenues.forEach(ev => {
      console.log(ev);
      let { venues } = ev
      venues.forEach(venue => {
        let array = venue.location.split(' ')
        let city = array[array.length -1]
        venue.weekdays.forEach(el => {
        
          let dayOfweek = weekdaysList.find(item => item.value === el)
          let regularDay = moment().day(dayOfweek.calValue);
          if (regularDay.date() > 7) regularDay.add(7, 'd');
          var month = regularDay.month();
          while (month === regularDay.month()) {
            let item = {
              title: `${ev.name}, ${city}`,
              start: moment(regularDay).format("YYYY-MM-DD"),
              end: moment(regularDay).format("YYYY-MM-DD"),
              allDay: true
            }
            list.push(item)
            regularDay.add(7, 'd')
          }
        })
      })
    })
    let newList = [...irrEventsList, ...list]
    setEventsList(newList)

  }, [irrEventsList])

  return (
    <div className='ui container' style={{margin: '40px'}}>
      <Calendar
        localizer={localizer}
        events={eventsList}
        startAccessor="start"
        endAccessor="end"
        defaultView='month'
        style={{ height: 500 }}
        views={['month', 'agenda']}
      />
    </div >
  )
}

export default MyCalendar
