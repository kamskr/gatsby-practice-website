import React from "react"
import Button from "../components/Button/Button"
import { graphql } from "gatsby"
import { ContentWrapper, ImageWrapper } from "../styles/mainPageStyles"

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1200, quality: 100) {
          src
          srcSet
          sizes
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
    <ImageWrapper
      src={data.file.childImageSharp.fluid.src}
      srcSet={data.file.childImageSharp.fluid.srcSet}
      sizes={data.file.childImageSharp.fluid.sizes}
    />
  </>
)

export default IndexPage
