const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, cache, actions, createNodeId, store }) => {
  const { createNode } = actions

  console.log("on create node")

  // Ensures we are processing only markdown files
  if (node.internal.type === "SitePage") {
    // Creates new query'able field with name of 'slug'
    createRemoteFileNode({
      // The source url of the remote file
      url: `https://httpbin.org/headers`,

      // The id of the parent node (i.e. the node to which the new remote File node will be linked to.
      node,

      // The redux store which is passed to all Node APIs.
      store,

      // Gatsby's cache which the helper uses to check if the file has been downloaded already. It's passed to all Node APIs.
      cache,

      // The action used to create nodes
      createNode,

      // A helper function for creating node Ids
      createNodeId,

      // OPTIONAL
      // Adds htaccess authentication to the download request if passed in.
      auth: { htaccess_user: `USER`, htaccess_pass: `PASSWORD` },
    })
  }
}
