import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import _ from 'lodash'

import { Container } from '../../styledComponents/containers'
import { SubHeader, StyledSpan, Paragraph } from '../../styledComponents/typography'
import { lightGrey, secondaryColor } from '../../styledComponents/variables'
moment.locale('nl-be');

const StickyCard = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 80px;
  align-self: flex-start;
  margin: 40px 10px;
  padding: 20px;
  border: solid;
  display: flex;
  flex-direction: column;
`

const VenuesCard = ({ venue }) => {

  const renderVenue = () => {
    if(venue.regular) {
      let uniqueLocation = _.unionBy(venue.regularVenue, 'location')
      let grouped = []
      uniqueLocation.forEach(v => {        
        let joinedByLocation = venue.regularVenue.filter(l => l.location === v.location)
        grouped.push(joinedByLocation)
        
      })      
      // return venue.regularVenue.map((v,i) => renderDetails(v))
      return grouped.map((el, i) => {
        if (el.length === 1) return renderDetails(el[0], i)
        else return renderGroupedVenue(el, i)
      })     
    }
    else return renderDetails(venue)
  }
  
  const renderDates = (venue, i) => {    
    if (!venue.weekdays) return formatDate(venue)
    else {
      let time = moment(venue.time).format('H:mm')      
      return (
        <Paragraph key={i} margin='0'><StyledSpan weight='200'>{venue.weekdays}, om {time}u</StyledSpan></Paragraph>
      )
    }
  }

  const renderDetails = (venue, i) => (
    <div key={i}>
      <Container display='flex' direction='column' margin='10px 0'>
        <StyledSpan color={lightGrey} weight='600'>Waneer</StyledSpan>
        <StyledSpan weight='200'>{renderDates(venue, i)}</StyledSpan>
      </Container>
      <Container display='flex' direction='column' margin='10px 0'>
        <StyledSpan color={lightGrey} weight='600'>Waar</StyledSpan>
        <StyledSpan weight='200'>{venue.location}</StyledSpan>
      </Container>
      <hr/>
    </div>
  )

  const renderGroupedVenue = (sameLocationVenues, i) => {
    let agenda = sameLocationVenues.map(ev => ({ weekdays: ev.weekdays, time: ev.time }))
    return (
      <div key={i}>
        <Container display='flex' direction='column' margin='10px 0'>
          <StyledSpan color={lightGrey} weight='600'>Waneer</StyledSpan>
          <StyledSpan weight='200'>{agenda.map(el => renderDates(el))}</StyledSpan>
        </Container>
        <Container display='flex' direction='column' margin='10px 0'>
          <StyledSpan color={lightGrey} weight='600'>Waar</StyledSpan>
          <StyledSpan weight='200'>{sameLocationVenues[0].location}</StyledSpan>
        </Container>
        <hr />
      </div>
    )
  }

  const formatDate = (venue) => {
    moment.locale('nl-be');
    return `${moment(venue.date).format('MMMM Do')}, ${moment(venue.time).format('H:mm')}u`
  }

  const renderPrice = () => (
    <Container>
      <StyledSpan color={lightGrey} weight='600'>Prijs:{' '}</StyledSpan> 
      <StyledSpan weight='200'>{venue.price}€</StyledSpan>
    </Container>
  )
  
  return (
    <StickyCard>
      <SubHeader 
        size='18px' 
        weight='600' 
        textAlign='center' 
        textTransform='uppercase'
        color={secondaryColor}>
        Next venues
      </SubHeader>
      { renderVenue() }
      { renderPrice() }
    </StickyCard>
  )
}

export default VenuesCard