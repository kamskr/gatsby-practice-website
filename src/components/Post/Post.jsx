import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Post = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)
  return (
    <>
      <p>{data.site.siteMetadata.description}</p>
    </>
  )
}

export default Post
