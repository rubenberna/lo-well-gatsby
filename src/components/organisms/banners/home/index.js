import React from 'react'

import { Container } from '../../../styledComponents/containers'
import Intro from '../../../molecules/intro'
import HomeImage from '../../../atoms/images/homeBanner'

const HomeBanner = () => {
  return (
    <Container display='flex' justify='space-between' align='center'>
      <Intro>
        {{
          subHeader: 'What we do',
          header: 'We develop and build brands',
          paragraph: 'Incididunt consectetur pariatur amet ipsum consequat excepteur. Cupidatat veniam adipisicing magna commodo labore amet proident voluptate pariatur nisi eiusmod ex dolore id. Aute nisi eu aliquip fugiat commodo ad ullamco nisi cillum qui. Velit ex proident dolor sit sint. Occaecat culpa duis Lorem mollit non ad sint irure cillum ipsum ad nostrud. Excepteur ut ad esse ut aute in sunt aliquip est tempor deserunt reprehenderit aute. Minim in reprehenderit aliqua occaecat commodo veniam dolor culpa Lorem qui.',
          width: '55%',
          display: 'flex',
          justify: 'center',
        }}
      </Intro>
        <Container width='40%' height='90vh'>
          <HomeImage/>
        </Container>
    </Container>
  )
}

export default HomeBanner