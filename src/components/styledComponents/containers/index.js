import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: ${({width}) => width};
  height: ${({height}) => height};
  margin: ${({ margin }) => margin};
  display: ${({display}) => display};
  flex-direction: ${({direction}) => direction};
  justify-content: ${({justify}) => justify};
  align-items: ${({ align }) => align};
  background: ${({ background }) => background};
`

export const Container = ({ children, width, direction, display, justify, height, align, margin, background }) => {
  
  return (
    <StyledContainer
      width={width}
      height={height}
      display={display}
      direction={direction}
      justify={justify}
      align={align}
      margin={margin}
      background={background}
      >
      {children}
    </StyledContainer>
  )
}



