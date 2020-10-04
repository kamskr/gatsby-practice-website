import styled from "styled-components"
import Image from "gatsby-image"

export const ContentWrapper = styled.div`
  width: 65%;
  height: calc(100vh - 80px);
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  h1 {
    font-size: 85px;
    margin: 0;
    width: 40%;
    line-height: 0.9;
  }
  p {
    margin: 20px 0 40px;
    width: 40%;
  }
`

export const ImageWrapper = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 35%;
  height: 100vh;
  object-fit: cover;
`
