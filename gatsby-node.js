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

  // Therapists
  const therapistsSnap = await firebase.therapists.get()
  const therapists = therapistsSnap.docs.map(doc => {
    let therapist = doc.data()
    therapist.id = doc.id
    return therapist
  })

  createNode({
    therapists,
    id: `therapists-build-time-data`,
    parent: null,
    children: [],
    internal: {
      type: `Therapists`,
      contentDigest: createContentDigest(therapists),
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


exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@firebase/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

// exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
//   if (stage === 'build-html') {
//     actions.setWebpackConfig({
//       // Don't bundle modules that reference browser globals such as `window` and `IDBIndex` during SSR.
//       // See: https://github.com/gatsbyjs/gatsby/issues/17725
//       externals: getConfig().externals.concat(function (_context, request, callback) {
//         // Exclude bundling firebase* and react-firebase*
//         // These are instead required at runtime.
//         if (/^(react-)?firebase(.*)/.test(request)) {
//           console.log('Excluding bundling of: ' + request);
//           return callback(null, 'umd ' + request);
//         }
//         callback();
//       }),
//     });
//   }
// };
