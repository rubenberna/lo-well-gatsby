import { Link } from 'gatsby'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'


export const StyledCard = styled(Card)`
  transition: 0.5s all;
  &:hover {
    transform: translateY(-10px)
  }
`

export const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none !important;
  &:hover {
    color: #ffffff;
  }
`