import styled from 'styled-components'
import { Button } from 'react-bootstrap'

export const PlusButton = styled.button`
  color: #43a047;
  background: none;
`

export const MinusButton = styled.button`
  color: #c62828;
  background: none;
`

export const ReadMoreBtn = styled(Button)`
  background: #81c784 !important;
  border-color: #81c784 !important;
  &:hover {
    background: #a5d6a7 !important;
    border-color: #a5d6a7 !important;
  }

`