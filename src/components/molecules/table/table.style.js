import styled from 'styled-components'

export const STable = styled.table`
  width: ${({width}) => width};
`
export const StyledTr = styled.tr`
  transition: 0.3s all;
  height: 40px;
  &:hover {
    background: #e0e0e0;
  }
`

export const MainTd = styled.td`
  width: ${({ width }) => width};
`

export const ActionTd = styled.td`
  width: 10%;
  font-weight: 600;
  cursor: pointer;
  color: ${({ color }) => color} ;
`