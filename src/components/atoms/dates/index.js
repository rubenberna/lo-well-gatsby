import React from 'react'
import { Footer } from '../../styledComponents/typography'

const Dates = ({ dates }) => {
  const renderDates = () => {
    if(dates.length === 1) return <Footer weight='200'>{dates[0]}</Footer>
    if (dates.length === 2) return <Footer weight='200'>{dates[0]} en {dates[1]}</Footer>
    else if (dates.length > 2) return <Footer weight='200'>{[dates.slice(0, -1).join(', '), dates.slice(-1)[0]].join(dates.length < 2 ? '' : ' en ')}</Footer>
  }
  return renderDates()
}

export default Dates