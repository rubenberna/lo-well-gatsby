import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const RoundImage = styled(LazyLoadImage)`
  margin: 0 auto;
  object-fit: contain;
  width: 100%;
  height: auto;
  margin-top: -25%;
`

export const ImageCropper = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
`