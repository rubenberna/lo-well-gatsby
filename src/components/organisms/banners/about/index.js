import React from 'react'
import TherapistCard from '../../cards/therapistCard'


const AboutBanner = ({ therapists }) => 
  therapists.map((t, i) => <TherapistCard key={i} therapist={t}/>)

export default AboutBanner