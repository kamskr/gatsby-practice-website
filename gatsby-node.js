const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`)

  const data = await graphql(
    `
      query queryArticles {
        allMdx {
          nodes {
            frontmatter {
              title
              slug
              author
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 700, maxHeight: 400) {
                    src
                  }
                }
              }
            }
            excerpt(pruneLengths: 50)
          }
        }
      }
    `
  )

  result.data.allMdx.nodes.forEach(post => {
    createPage({
      // Path for this page — required
      path: `${post.node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        // Add optional context data to be inserted
        // as props into the page component..
        //
        // The context data can also be used as
        // arguments to the page GraphQL query.
        //
        // The page "path" is always available as a GraphQL
        // argument.
      },
    })
  })
}
