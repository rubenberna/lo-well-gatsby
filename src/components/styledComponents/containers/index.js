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
  position: ${({ position }) => position};
  z-index: ${({ zIndex }) => zIndex};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  box-shadow: ${({shadow}) => shadow};
  border-radius: ${({radius}) => radius};
`

export const Container = ({ children, width, direction, display, justify, height, align, margin, background, position, zIndex, top, left, padding, border, shadow, radius }) => {
  
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
      position={position}
      zIndex={zIndex}
      top={top}
      left={left}
      padding={padding}
      border={border}
      shadow={shadow}
      radius={radius}
      >
      {children}
    </StyledContainer>
  )
}

export const Paralax = styled.div`
  background-image: ${({ url }) => `linear-gradient(to right, rgba(64, 59, 74, 0.52), rgba(231, 233, 187, 0.73)), url('${url}')`};
  height: ${({height}) => height};
  width: ${({ width}) => width};
  background-attachment: fixed;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 20px 0;
  position: ${({position}) => position};
  display: ${({display}) => display};
  justify-content: ${({justify}) => justify};
  align-items: ${({align}) => align};
  flex-direction: ${({direction}) => direction};
`



