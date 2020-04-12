const firebase = require('./firebaseInit')
const path = require(`path`)

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {

  // Events
  const eventSnap = await firebase.events.get()
  const events = eventSnap.docs.map(doc => {
    let event = doc.data()
    event.id = doc.id
    return event
  })

  createNode({
    events,
    id: `events-build-time-data`,
    parent: null,
    children: [],
    internal: {
      type: `Events`,
      contentDigest: createContentDigest(events),
    },
  })

  // Therapies
  const therapiesSnap = await firebase.therapies.get()
  const therapies = therapiesSnap.docs.map(doc => {
    let therapy = doc.data()
    therapy.id = doc.id
    return therapy
  })

  createNode({
    therapies,
    id: `therapies-build-time-data`,
    parent: null,
    children: [],
    internal: {
      type: `Therapies`,
      contentDigest: createContentDigest(therapies),
    },
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const therapyTemplate = path.resolve(`src/templates/therapy.js`)

  return graphql(`
    query therapiesQuery {
        therapies {
          therapies {
            id
            name
            heading
            paragraphs
            photoUrl
            therapists
            slug
          }
        }
      }
  `, { limit: 100 }).then( result => {
    if (result.errors) {
      throw result.errors
    }

    // Create pages
    result.data.therapies.therapies.forEach(t => {
      createPage({
        path: `${t.slug}`,
        component: therapyTemplate,
        context: {
          ...t
        }
      })
    })
  })
}

