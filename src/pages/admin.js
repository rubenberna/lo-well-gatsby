// import React, { useContext } from 'react'
// import { graphql } from 'gatsby'

// import { AuthContext } from '../context/auth'
// import { Container } from '../components/styledComponents/containers'
// import Layout from '../components/layout'
// import Login from '../components/organisms/banners/login'
// import Dashboard from '../components/organisms/banners/dashboard'

// const Admin = ({ data }) => {
//   // const { currentUser } = useContext(AuthContext)

//   const conditionalRender = () => {
//     if (!currentUser) return <Login />
//     else return <Dashboard data={data}/>
//   }

//   return (
//     <Layout>
//       <Container position='relative'>
//         <Container position='absolute' right='20px' >
//         </Container>

//       </Container>
//     </Layout>
//   )
// }

// export const allDataQuery = graphql`
//   query getAll {
//     therapies {
//       therapies {
//         id
//         photoUrl
//         heading
//         name
//         paragraphs
//         slug
//         therapists
//       }
//     }
//     events {
//       events {
//         date
//         description
//         id
//         location
//         name
//         photoUrl
//         price
//         regular
//         regularVenue {
//           location
//         }
//       }
//     }
//     therapists {
//       therapists {
//         email
//         id
//         name
//         intro
//         phone
//         photoUrl
//       }
//     }
//   }
// `

// export default Admin;