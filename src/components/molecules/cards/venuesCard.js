import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import { Container } from '../../styledComponents/containers'
import { SubHeader, StyledSpan } from '../../styledComponents/typography'
import { lightGrey, secondaryColor } from '../../styledComponents/variables'
import Dates from '../../atoms/dates'

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
      return venue.regularVenue.map((v,i) => renderDetails(v))
    }
    else return renderDetails(venue)
  }
  
  const renderDates = (venue) => {    
    if (!venue.weekdays) return formatDate(venue.date)
    else return <Dates dates={venue.weekdays}/>
  }

  const renderDetails = (venue) => (
    <div>
      <Container display='flex' direction='column' margin='10px 0'>
        <StyledSpan color={lightGrey} weight='600'>Waneer</StyledSpan>
        <StyledSpan weight='200'>{renderDates(venue)}</StyledSpan>
      </Container>
      <Container display='flex' direction='column' margin='10px 0'>
        <StyledSpan color={lightGrey} weight='600'>Waar</StyledSpan>
        <StyledSpan weight='200'>{venue.location}</StyledSpan>
      </Container>
      <hr/>
    </div>
  )

  const formatDate = (date) => {
    moment.locale('nl-be');
    return moment(date).format('LL')
  }

  const renderPrice = () => (
    <Container>
      <StyledSpan color={lightGrey} weight='600'>Price:{' '}</StyledSpan> 
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