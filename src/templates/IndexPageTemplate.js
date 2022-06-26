import React from "react"
import { Link } from "gatsby"
import { SectionHeading, TextImageSplit } from "../components/Sections"
import { PrimaryButton, SecondaryButton } from "../components/Buttons"
import { Container, CardSet } from "../components/Sections"
import Image from "../components/Image"
import { StaticImage } from "gatsby-plugin-image"

const IndexPageTemplate = ({
  heading,
  subheading,
  subhead1,
  subhead2,
  line1,
  line2,
  image,
  posts = [],
  about,
}) => {
  return (
    <div>
      {/* Header */}
      <div className="relative min-w-full h-36rem lg:h-44rem overflow-hidden bg-green text-center pb-8 lg:pb-20 pt-44 z-10 sm:pt-16 sm:pb-14 md:pt-16 md:pb-16 lg:pt-32 lg:pb-24 items-center">
        <div className="w-4/5 md:w-1/2 mx-auto">
          <h3 className="font-bold text-beige text-3xl sm:pt-28">{line1}</h3>
          <h3 className="font-bold text-beige text-3xl py-2">{line2}</h3>
          <h1 className="mt-2 text-beige text-3xl md:text-6xl md:py-2">
            {subhead1}
          </h1>
          <h1 className="mt-2 text-beige text-3xl md:text-6xl md:py-2 pb-6">
            {subhead2}
          </h1>
          <br></br>
          <div className="w-1/3 md:w-1/5 h-8px bg-purple mx-auto"></div>

          <PrimaryButton to="/contact" className="mt-6 lg:mt-10 self-center">
            WORK WITH ME
          </PrimaryButton>
        </div>
      </div>

      {/*Pitch Section */}
      <div className="relative min-w-full h-full overflow-hidden bg-beige text-center pb-8 lg:pb-20 pt-8 lg:pt-20 z-10 items-center">
        <div className="w-4/5 md:w-3/4 mx-auto text-darkGreen">
          <div className="text-2xl font-medium sm:text-3xl">
            I help heart-centered entrepreneurs in health and wellness with the
            backend of their business so they can focus on what's most
            important:
          </div>
            <br></br>
          <div className="text-3xl font-medium mx-2 lg:mx-12 lg:text-4xl">
            CLIENT SERVICING, SUSTAINED GROWTH AND THE REASON THEY DO WHAT THEY
            DO
          </div>
            <br></br>
          <div className="w-1/3 md:w-1/5 h-8px bg-purple mx-auto"></div>
            <br></br>
          <div className="text-left text-4xl lg:text-5xl font-semibold lg:font-bold">LET ME GUESS...</div>
          <br></br>
          <ul className="text-xl text-left list-disc">
            <li>You've always been able to wear all the hats in your business, but lately, you can't seem to shake the feeling that you're falling behind.</li>
            <br></br>
            <li>Your creative web tasks are distracting you from your main base and you want to get back to your passion - there just aren't enough hours in the day.</li>
            <br></br>
            <li>You have a clear vision, game-changing ideas, and goals to grow your business, but neither social media nor technology are where you want to spend your time, and you're beginning to feel stuck.</li>
            <br></br>
            <li>You want to be able to CONNECT with your base consistently on Social Media but you're not sure where to start...</li>
          </ul>
          <br></br>
          <p className="text-4xl text-left">
            YOU DON'T HAVE TO DO IT <b>ALONE</b>
          </p>
          <br></br>
          <div className="w-1/3 md:w-1/5 h-8px bg-purple"></div>
          <br></br>
          <PrimaryButton to="/contact" className="mt-6 float-left">
            GET STARTED
          </PrimaryButton>
        </div>
      </div>

      {/* Services section */}
      <div className="hidden lg:flex flex min-w-full overflow-hidden bg-purple text-center pb-8 lg:pb-20 pt-8 lg:pt-20 z-10 items-center">
        <div className="w-4/5 md:w-3/4 mx-auto text-darkGreen">
          <div className="text-4xl text-left pb-8">THIS IS HOW I CAN HELP...</div>
          <div class="flex flex-row w-full items-center pb-4">
            <div className="flex-col float-left mx-auto text-2xl">
            <StaticImage
              src="../img/DD_Instagram.png"
              alt="Instagram"
              className="flex items-center mx-auto m-2"
              imgClassName="rounded"
              layout="fixed"
              width={140}
              height={140}
              loading="eager"
              backgroundColor="transparent"
              placeholder="blurred"
            />
              <p>Social Media Support</p>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros</p>
            </div>
            <div className="flex-col float-left mx-auto text-2xl">
            <StaticImage
              src="../img/DD_Instagram.png"
              alt="Instagram"
              className="flex items-center mx-auto m-2"
              imgClassName="rounded"
              layout="fixed"
              width={140}
              height={140}
              loading="eager"
              backgroundColor="transparent"
              placeholder="blurred"
            />
            <p>Creative Services</p>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros</p>
            </div>
            <div className="flex-col float-left mx-auto text-2xl">
            <StaticImage
              src="../img/DD_Instagram.png"
              alt="Instagram"
              className="flex items-center mx-auto m-2"
              imgClassName="rounded"
              layout="fixed"
              width={140}
              height={140}
              loading="eager"
              backgroundColor="transparent"
              placeholder="blurred"
            />
            <p>Website Support</p>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros</p>
            </div>
          </div>
          <PrimaryButton to="/contact" className="mt-6">
            GET STARTED
          </PrimaryButton>
        </div>
      </div>

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
