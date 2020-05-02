import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'

import { firebaseApp } from '../services/firebase'
import { Container } from '../components/styledComponents/containers'
import Layout from '../components/layout'
import Login from '../components/organisms/banners/login'
import Dashboard from '../components/organisms/banners/dashboard'
import StatusBoard from '../components/molecules/statusBoard'

const Admin = ({ data }) => {
  const [user, setUser] = useState('')
  const [timings, setTimings] = useState([])  

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(setUser);
  }, []);

  const addTimer = (obj) => {
    setTimings([...timings, obj])
  }

  const conditionalRender = () => {
    if (!user) return <Login setUser={setUser}/>
    else return <Dashboard data={data} addTimer={addTimer}/>
  }

  return (
    <Layout>
      <Container position='relative'>
        <StatusBoard user={user} timings={timings}/>
        {conditionalRender()}
      </Container>
    </Layout>
  )
}

export const allDataQuery = graphql`
  query getAll {
    therapies {
      therapies {
        id
        photoUrl
        heading
        name
        paragraphs
        slug
        therapists
        price
        intro
      }
    }
    events {
      events {
        date
        description
        id
        location
        name
        photoUrl
        price
        regular
        intro
        slug
        regularVenue {
          location
          weekdays
          time
        }
      }
    }
    therapists {
      therapists {
        email
        id
        name
        intro
        phone
        photoUrl
      }
    }
  }
`

export default Admin;