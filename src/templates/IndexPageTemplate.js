import React from "react"
import { Link } from "gatsby"
import { SectionHeading, TextImageSplit } from "../components/Sections"
import { PrimaryButton, SecondaryButton } from "../components/Buttons"
import { Container, CardSet } from "../components/Sections"
import Image from "../components/Image"

const IndexPageTemplate = ({
  heading,
  subheading,
  image,
  posts = [],
  about,
}) => {
  return (
    <div>
      {/* Header */}
      <div className="relative bg-green-700 min-w-full overflow-hidden bg-green text-center pb-12 pt-44 z-10 sm:pt-16 sm:pb-14 md:pt-16 md:pb-16 lg:pt-32 lg:pb-24">
        <h3 className="font-bold text-beige text-xl sm:pt-28">
          {heading}
        </h3>
        <h1 className="mt-2 text-beige text-2xl">
          {subheading}
        </h1>

        <PrimaryButton to="/contact" className="mt-6 lg:mt-10 self-center">
          WORK WITH ME
        </PrimaryButton>
      </div>

      {/* Featured projects */}
      <Container>
        <div className="text-center">
          <h2 className="text-2xl font-medium text-gray-800 sm:text-3xl lg:text-4xl">
          I’m Nina. I help <em>heart-centered entrepreneurs in health and wellness</em> with the backend of their business so they can focus on what's most important:
          </h2>
          <h1 className="text-3xl font-medium text-gray-900 sm:text-4xl lg:text-5xl ">
            Test H1 text
            </h1>

        </div>
      </Container>

      {/* About section */}
      <TextImageSplit image={about.image}>
        <SectionHeading>{about.heading}</SectionHeading>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {about.description}
        </p>
        <SecondaryButton to={about.button.url} className="mt-6 lg:mt-10">
          {about.button.label}
        </SecondaryButton>
      </TextImageSplit>
    </div>
  )
}

export default IndexPageTemplate
