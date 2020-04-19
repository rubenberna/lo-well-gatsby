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
  align-self: ${({ alignSelf }) => alignSelf};
  background: ${({ background }) => background};
  position: ${({ position }) => position};
  z-index: ${({ zIndex }) => zIndex};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  box-shadow: ${({shadow}) => shadow};
  border-radius: ${({radius}) => radius};
  max-width: ${({ maxWidth }) => maxWidth};
  min-height: ${({ minHeight }) => minHeight};
`

export const Container = ({ children, width, direction, display, justify, height, align, alignSelf, margin, background, position, zIndex, top, left, right, bottom, padding, border, shadow, radius, maxWidth, minHeight }) => {
  
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
      right={right}
      bottom={bottom}
      padding={padding}
      border={border}
      shadow={shadow}
      radius={radius}
      maxWidth={maxWidth}
      alignSelf={alignSelf}
      minHeight={minHeight}
      >
      {children}
    </StyledContainer>
  )
}

export const Paralax = styled.div`
  background-image: ${({ url }) => `url('${url}')`};
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



