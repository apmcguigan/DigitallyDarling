import React from "react"
import Header from "../components/Header"
import Content from "../components/Content"
import { Container, SectionHeading } from "../components/Sections"
import Image from "../components/Image"
import { PrimaryButton, SecondaryButton } from "../components/Buttons"
import { StaticImage } from "gatsby-plugin-image"


function ServicesPageTemplate({ heading, subheading, html, team }) {
  return (
    <>
    <div>
    {/* Header */}
    <div className="relative min-w-full h-36rem md:h-40rem lg:h-44rem overflow-hidden bg-green text-center pb-8 md:pb-12 lg:pb-20 pt-44 z-10 sm:pt-16 sm:pb-14 md:pt-16 md:pb-16 lg:pt-32 lg:pb-24 items-center">
        <div className="w-4/5 md:w-1/2 mx-auto">
          <h1 className="text-beige text-3xl sm:pt-28">{heading}</h1>
          <h1 className="text-beige text-3xl py-2"><p>TAKE BACK YOUR TIME TO FOCUS ON WHAT MATTERS <b> THE MOST </b></p></h1>
          <br></br>
          <div className="w-1/3 md:w-1/5 h-8px bg-purple mx-auto"></div>

          <PrimaryButton to="/contact" className="mt-6 lg:mt-10 self-center">
            WORK WITH ME
          </PrimaryButton>
        </div>
      </div>

      {/* 2nd section */}

      
</div>
</>
  )
}

export default ServicesPageTemplate
