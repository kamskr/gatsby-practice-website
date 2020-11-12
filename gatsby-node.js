const path = require(`path`)
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`)
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panic('failed to create posts ', result.errors);
  }
  const pages = result.data.allMdx.nodes;

  pages.forEach(post => {
    const slugifiedTitle = slugify(post.id, {
      lower: true,
    })

    createPage({
      path: `articles/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: {
        id: post.id,
      },
    })
  })
}
