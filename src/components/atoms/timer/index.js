import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Container } from '../../styledComponents/containers'
import { RefreshIcon } from '../../atoms/images/icons'

const StyledRefresh = styled(RefreshIcon)`
  cursor: pointer;
`

const Timer = ({counter}) => {
  const [timer, setTimer] = useState(counter)

  useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [timer])

  const renderRefreshIcon = () => {
    if (timer < 1) return <StyledRefresh onClick={() => window.location.reload(false)}/>
  }
  return (
    <Container width='90px' display='flex' justify='space-between'>
      Timer: {timer}
      {renderRefreshIcon()}
    </Container>
  )
}

export default Timer
