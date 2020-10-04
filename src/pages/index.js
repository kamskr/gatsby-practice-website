import React from "react"
import Button from "../components/Button/Button"
import { graphql } from "gatsby"
import { ContentWrapper, ImageWrapper } from "../styles/mainPageStyles"

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      <h1>Your new space</h1>
      <p>
        While artists work from real to the abstract, architects must work from
        the abstract to the real.
      </p>
      <Button>estimate project</Button>
    </ContentWrapper>
    <ImageWrapper fluid={data.file.childImageSharp.fluid} />
  </>
)

export default IndexPage
