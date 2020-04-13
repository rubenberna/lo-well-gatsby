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
  font-size: ${({size}) => size};
`

const StyledSubHeader = styled.h4`
  font-weight: ${({ weight }) => weight};
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  font-size: ${({ size }) => size};
  opacity: ${({ opacity }) => opacity};
`

const StyledFooter = styled.span`
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  font-size: ${({ size }) => size};
  letter-spacing: 2px;
`

export const FooterDetails = styled.p`
  font-size: 13px;
  font-weight: 200;
`

export const Header = ({ children, weight, color, margin, size }) => (
  <StyledHeader 
    weight={weight}
    color={color}
    margin={margin}
    size={size}
    >
    {children}
  </StyledHeader>
) 

export const Paragraph = ({ children, weight, color, margin, size }) => (
  <StyledParagraph 
    weight={weight}
    color={color}
    margin={margin}
    size={size}
    >
    {children}
  </StyledParagraph>
)

export const SubHeader = ({ children, weight, color, margin, opacity, size, fontFamily }) => (
  <StyledSubHeader 
    weight={weight}
    color={color}
    margin={margin}
    opacity={opacity}
    size={size}
    fontFamily={fontFamily}
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
