import React, { useEffect, useState } from 'react'

import { Container } from '../../styledComponents/containers'
import { RefreshIcon } from '../images/icons'

const Timer = ({counter, index}) => {
  const [timer, setTimer] = useState(counter)

  useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000)
  }, [timer])

  const refresh = () => {

  }

  const renderRefreshIcon = () => {
    if (timer === 0 ) return <RefreshIcon refresh={index}/>
  }
  return (
    <Container width='90px' display='flex' justify='space-between'>
      Timer: {timer}
      {renderRefreshIcon()}
    </Container>
  )
}

export default Timer
