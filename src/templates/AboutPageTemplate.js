import React from "react"
import Header from "../components/Header"
import Content from "../components/Content"
import { Container, SectionHeading } from "../components/Sections"
import Image from "../components/Image"
import { PrimaryButton, SecondaryButton } from "../components/Buttons"
import { StaticImage } from "gatsby-plugin-image"


function AboutPageTemplate({ heading, subheading, html, team }) {
  return (
    <>
    <div>
    {/* Header */}
      <div className="relative min-w-full h-full overflow-hidden bg-darkGreen text-center pb-8 md:pb-12 lg:pb-20 pt-44 z-10 sm:pt-16 sm:pb-14 md:pt-16 md:pb-16 lg:pt-32 lg:pb-24 items-center">
        <div className="h-36rem w-4/5 md:w-1/2 mx-auto pt-28">
          <div className="w-1/2 mx-auto float-left">
            <h1 className="mt-2 text-beige text-3xl md:text-8xl md:py-2 mr-24">
              Meet
            </h1>
            <h1 className="mt-2 text-beige text-3xl md:text-8xl md:py-2 pb-6">
              Beth
            </h1>
            <br></br>
            <div className="w-1/3 md:w-1/5 h-8px bg-purple mx-auto"></div>
          </div>

          <div className="w-1/2 mx-auto float-right">
            <StaticImage
                src="../img/tree.jpg"
                alt="tree placeholder"
                className="flex justify-center m-2"
                layout="fixed"
                width={400}
                height={600}
                loading="eager"
                backgroundColor="transparent"
                placeholder="blurred"
              />
          </div>
       </div>

      {/* 2nd section */}
      <div className="h-full w-4/5 md:w-1/2 mx-auto pt-36">
        <div className="w-1/2 mx-auto float-left">
            <StaticImage
                src="../img/headshot.jpg"
                alt="tree placeholder"
                className="flex justify-center m-2"
                imgClassName="rounded"
                layout="fixed"
                width={400}
                height={600}
                loading="eager"
                backgroundColor="transparent"
                placeholder="blurred"
              />
          </div>
        </div>






            <SecondaryButton to="/contact" className="mt-6 lg:mt-10 self-center">
              WORK WITH ME
            </SecondaryButton>
     </div>
  </div>
</>
  )
}

export default AboutPageTemplate
