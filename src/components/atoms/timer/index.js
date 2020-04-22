import React, { useEffect, useState } from 'react'

import { Container } from '../../styledComponents/containers'
import { RefreshIcon } from '../../atoms/images/icons'

const Timer = ({counter}) => {
  const [timer, setTimer] = useState(counter)

  useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000)
  }, [timer])

  const renderRefreshIcon = () => {
    if(timer < 1) {
      return <RefreshIcon onClick={() => window.location.reload(false)}/>
    }
  }
  return (
    <Container width='90px' display='flex' justify='space-between'>
      Timer: {timer}
      {renderRefreshIcon()}
    </Container>
  )
}

export default Timer
