require("dotenv").config()

const blogQuery = `
  {
   posts: allMdx(
    filter: { fileAbsolutePath: { regex: "/data/articles/" } }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
  }
`;

const settings = { attributesToSnippet: [`excerpt:20`] };
const queries = [
  {
    query: blogQuery,
    transformer: ({ data }) => data.posts.edges.map(({ node: { frontmatter, ...rest } }) => {
      return {
        ...frontmatter,
        ...rest
      }
    }),
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
    settings,
  },
];

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `600`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/data/articles`,
      },
    },
    // {
    //   resolve: "gatsby-source-datocms",
    //   options: {
    //     apiToken: process.env.API_DATO_CMS,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,

    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // `gatsby-plugin-offline`,
  ],
}
