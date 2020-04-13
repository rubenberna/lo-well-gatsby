import React from 'react'

import { Container } from '../../styledComponents/containers'
import { SubHeader } from '../../styledComponents/typography'

const Ribbon = ({ children, color }) => {
  return (
    <Container 
      background={color}
      height='100px'
      width= '84%'
      display='flex'
      align='center'
      >
      <SubHeader margin='0 0 0 110px' weight='200'>
        {children}
      </SubHeader>
    </Container>
  )
}

export default Ribbon