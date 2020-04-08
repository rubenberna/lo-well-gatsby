import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h1`
  font-weight: ${({weight}) => weight};
  color: ${({color}) => color};
  margin: ${({ margin }) => margin};
  font-size: 37px;
`

const StyledParagraph = styled.p`
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  margin: ${({margin}) => margin};
`

const StyledSubHeader = styled.h4`
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
`

export const Header = ({ children, weight, color, margin }) => (
  <StyledHeader 
    weight={weight}
    color={color}
    margin={margin}
    >
    {children}
  </StyledHeader>
) 

export const Paragraph = ({ children, weight, color, margin }) => (
  <StyledParagraph 
    weight={weight}
    color={color}
    margin={margin}
    >
    {children}
  </StyledParagraph>
)

export const SubHeader = ({ children, weight, color, margin }) => (
  <StyledSubHeader 
    weight={weight}
    color={color}
    margin={margin}
    >
    {children}
  </StyledSubHeader>
)
