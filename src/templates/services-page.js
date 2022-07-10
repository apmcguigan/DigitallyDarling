import React from "react"
import { graphql } from "gatsby"
import MyHelmet from "../components/MyHelmet"
import ServicesPageTemplate from "./ServicesPageTemplate.js"

const ServicesPage = ({ data }) => {
  const { frontmatter: fm } = data.markdownRemark

  return (
    <>
    <MyHelmet title={fm.title} description={fm.subheading} />
      <ServicesPageTemplate
        heading={fm.heading}
        subheading={fm.subheading}
      />
    </>
  )
}

export default ServicesPage

export const servicesPageQuery = graphql`
  query ServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        subheading
        team {
          name
          title
          image {
            childImageSharp {
              gatsbyImageData(
                width: 640
                placeholder: BLURRED
                aspectRatio: 1.5
                transformOptions: { fit: COVER, cropFocus: CENTER }
              )
            }
          }
        }
      }
    }
  }
`


