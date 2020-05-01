import React from 'react'
import styled from 'styled-components'

const StickyCard = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 80px;
  align-self: flex-start;
  margin-top: 40px;
  padding: 20px;
  border: solid;
  display: flex;
  flex-direction: column;
`


const VenuesCard = ({ venues }) => {
  console.log(venues);
  
  return (
    <StickyCard>
      Venues
    </StickyCard>
  )
}

export default VenuesCard