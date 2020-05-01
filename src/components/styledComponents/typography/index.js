import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

const StyledHeader = styled.h1`
  font-weight: ${({weight}) => weight};
  color: ${({color}) => color};
  margin: ${({ margin }) => margin};
  font-size: 37px;
  text-align: ${({align}) => align};
`

const StyledParagraph = styled.p`
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  margin: ${({margin}) => margin};
  font-size: ${({size}) => size};
  text-align: ${({align}) => align};
`

const StyledSubHeader = styled.h4`
  font-weight: ${({ weight }) => weight};
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  font-size: ${({ size }) => size};
  opacity: ${({ opacity }) => opacity};
  cursor: ${({ cursor }) => cursor};
  text-align: ${({ textAlign }) => textAlign};
  text-transform: ${({ textTransform }) => textTransform};
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

export const StyledSpan = styled.span`
  margin: ${({margin}) => margin};
  cursor: ${({cursor}) => cursor};
  color: ${({ color }) => color};
  font-weight: ${({ weight }) => weight};
  background: ${({background}) => background};
`

export const NoteCounter = styled.span`
  font-size: 12px;
  background: green;
  color: white;
  padding: 5px;
  border-radius: 50%;
`

export const Header = ({ children, weight, color, margin, size, align }) => (
  <StyledHeader 
    weight={weight}
    color={color}
    margin={margin}
    size={size}
    align={align}
    >
    {children}
  </StyledHeader>
) 

export const Paragraph = ({ children, weight, color, margin, size, align }) => (
  <StyledParagraph 
    weight={weight}
    color={color}
    margin={margin}
    size={size}
    align={align}
    >
    {children}
  </StyledParagraph>
)

export const SubHeader = ({ children, weight, color, margin, opacity, size, fontFamily, cursor, textAlign, textTransform }) => (
  <StyledSubHeader 
    weight={weight}
    color={color}
    margin={margin}
    opacity={opacity}
    size={size}
    fontFamily={fontFamily}
    cursor={cursor}
    textAlign={textAlign}
    textTransform={textTransform}
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

export const StyledLink = styled(Link)`
  text-decoration: none !important;
`