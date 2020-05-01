import React from 'react'
import { StyledLink } from '../../styledComponents/typography'
import { ReadMoreBtn } from '../../styledComponents/buttons'

const EventDetails = ({ slug }) => (
  <StyledLink to={slug}>
    <ReadMoreBtn>
      See more
      </ReadMoreBtn>
  </StyledLink>
)

export default EventDetails