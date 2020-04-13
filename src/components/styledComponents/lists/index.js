import styled from 'styled-components'

export const StyledList = styled.ul`
  list-style-type: none;
`

export const StyledLi = styled.li`
  transition: 0.3s all;
  color: ${({ color}) => color };
  cursor: pointer;
  :hover{
    color: ${({ hoverColor}) => hoverColor};
    opacity: ${({ hoverOpacity }) => hoverOpacity};
  }
`