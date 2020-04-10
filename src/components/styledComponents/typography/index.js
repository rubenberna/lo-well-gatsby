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

const StyledFooter = styled.span`
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  font-size: ${({ size }) => size};
  letter-spacing: 2px;
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


export const Footer = ({ children, weight, color, margin, size }) => (
  <StyledFooter 
    weight={weight}
    color={color}
    margin={margin}
    size={size}
    >
    {children}
  </StyledFooter>
)
