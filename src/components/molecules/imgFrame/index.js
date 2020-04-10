import React from 'react'

import { ImageCropper, RoundImage } from './imgFrame.style'

export const ImageFrame = ({ photoUrl }) => (
  <ImageCropper>
    <RoundImage alt='event' src={photoUrl}/>
  </ImageCropper>
)
