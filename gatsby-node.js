const firebase = require('./firebaseInit')

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const snapshot = await firebase.events.get()
  const records = snapshot.docs.map(doc => doc.data())
  createNode({
    events: records,
    id: `events-build-time-data`,
    parent: null,
    children: [],
    internal: {
      type: `Events`,
      contentDigest: createContentDigest(records),
    },
  })
}