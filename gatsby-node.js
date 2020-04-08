const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

function getCollection(node) {
  return node.fileAbsolutePath.replace(/content\//, "")
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    const collection = getNode(node.parent).sourceInstanceName

    // CUSTOM FIELDS

    createNodeField({
      node,
      name: `slug`,
      value: `${collection}${slug}`,
    })

    createNodeField({
      node,
      name: "collection",
      value: collection,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/article.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
