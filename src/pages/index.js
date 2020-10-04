import React from "react"
import Button from "../components/Button/Button"
import { graphql } from "gatsby"

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      publicURL
    }
  }
`
const IndexPage = ({ data }) => (
  <>
    <h1>Hello Hatta</h1>
    <p>
      While artists work from real to the abstract, architects must work from
      the abstract to the real.
    </p>
    <img src={data.file.publicURL} />
  </>
)

export default IndexPage
