import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

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
  background: ${({background}) => background};
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

export const SubHeader = ({ children, weight, color, margin, opacity, size, fontFamily, cursor }) => (
  <StyledSubHeader 
    weight={weight}
    color={color}
    margin={margin}
    opacity={opacity}
    size={size}
    fontFamily={fontFamily}
    cursor={cursor}
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