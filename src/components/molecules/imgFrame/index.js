import React from 'react'

import { ImageCropper, RoundImage } from './imgFrame.style'

export const ImageFrame = ({ photoUrl }) => (
  <ImageCropper>
    <RoundImage
      alt={'event'}
      height={'auto'}
      effect="blur"
      src={photoUrl} // use normal <img> attributes as props
      width={'100%'} />
    />
  </ImageCropper>
)
