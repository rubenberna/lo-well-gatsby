import React, { useState, useEffect } from 'react'
import { navigate } from "@reach/router"
import 'moment/locale/nl-be'  

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { weekdaysList } from '../../../_helpers'

import 'react-big-calendar/lib/css/react-big-calendar.css'

moment.locale('nl-be', {
  week: {
    dow: 1
  }
})
const localizer = momentLocalizer(moment)

const minTime = new Date();
minTime.setHours(8, 30, 0);
const maxTime = new Date();
maxTime.setHours(22, 30, 0);

const EventsCalendar = ({ events }) => {
  const [irrEventsList, setIrrEventsList] = useState([])
  const [eventsList, setEventsList] = useState([])
  const [currMonth, setCurrMonth] = useState(moment().month())

  const irregularEvents = events.filter(ev => !ev.regular)
  const regularEvents = events.filter(ev => ev.regular)
  const regularVenues = regularEvents.map(ev => ({ venues: ev.regularVenue, name: ev.name, slug: ev.slug }))

  useEffect(() => {
    console.log('irregular');
    irregularEvents.forEach(ev => {  
      let locationArray = ev.location.split(' ')
      let city = locationArray[locationArray.length - 1]
      let atWhatTime = moment(ev.time)

      let date = moment(ev.date) 
      date.set({
        hour: atWhatTime.get('hour'),
        minute: atWhatTime.get('minute')
      })

      let item = {
        title: `${ev.name}, ${city}`,
        start: new Date(moment(date)),
        end: new Date(moment(date).add(1, 'hour')),
        allDay: false,
        slug: ev.slug
      }
      let list = [...eventsList, item]
      setIrrEventsList(list)
    });
  }, [])

  useEffect(() => {
    console.log('regular');
    let list = []
    regularVenues.forEach(ev => {
      let { slug } = ev
      let { venues } = ev
      venues.forEach(venue => {
        let locationArray = venue.location.split(' ')
        let city = locationArray[locationArray.length -1]        
        let dayOfweek = weekdaysList.find(item => item.value === venue.weekdays)
        let regularDay = moment().month(currMonth).day(dayOfweek.calValue);
        let atWhatTime = moment(venue.time)

        regularDay.set({
          hour: atWhatTime.get('hour'),
          minute: atWhatTime.get('minute')
        })

        if (regularDay.date() > 7) regularDay.add(7, 'd');
        
        while (currMonth === regularDay.month()) {
          let item = {
            title: `${ev.name}, ${city}`,
            start: new Date(moment(regularDay)),
            end:  new Date(moment(regularDay).add(1, 'hour')),
            allDay: false,
            slug,
          }
          list.push(item)
          regularDay.add(7, 'd')
        }
      })
    })
    let newList = [...irrEventsList, ...list]
    setEventsList(newList)

  }, [irrEventsList, currMonth])

  const handleSelect = (e) => {        
    navigate(e.slug)
  }

  const handleNavigate = e => {
    setCurrMonth(moment(e).month())  
  }

  return (
    <div className='ui container' style={{margin: '40px'}}>
      <Calendar
        min={minTime}
        max={maxTime}
        localizer={localizer}
        events={eventsList}
        startAccessor="start"
        endAccessor="end"
        defaultView='month'
        style={{ height: 500 }}
        onSelectEvent={handleSelect}
        tooltipAccessor={ev => moment(ev.start).format('MMMM Do YYYY, HH:mm')}
        onNavigate={handleNavigate}
        popup={true}
        views={['month', 'week', 'agenda']}
        messages={{
          month: 'Maand',
          today: 'Vandaag',
          previous: '<',
          next: '>'
        }}
      />
    </div >
  )
}

export default EventsCalendar
