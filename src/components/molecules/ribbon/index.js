import React from 'react'

import { Container } from '../../styledComponents/containers'
import { SubHeader } from '../../styledComponents/typography'
import { secondaryColor } from '../../styledComponents/variables'

const Ribbon = ({ children }) => {
  return (
    <Container 
      background={secondaryColor}
      height='100px'
      width= '84%'
      display='flex'
      align='center'
      >
      <SubHeader margin='0 0 0 110px' weight='300'>
        {children}
      </SubHeader>
    </Container>
  )
}

export default Ribbon