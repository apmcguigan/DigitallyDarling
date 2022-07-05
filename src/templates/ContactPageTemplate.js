import React from 'react'
import Header from "../components/Header"
import { TextImageSplit, SectionHeading } from "../components/Sections"
import { StaticImage } from 'gatsby-plugin-image'


function ContactPageTemplate({
  heading,
  subheading,
  contactform,
  office
}) {
  return (
    <div className='w-9/12 mx-auto pb-12 text-darkGreen'>
      <div className='items-center text-center h-full'>
      <StaticImage
              src="../img/DD_Main_Transparent.png"
              alt="Digitally Darling Logo"
              className="mx-auto"
              layout="constrained"
              width={400}
              height={200}
              loading="eager"
              backgroundColor="transparent"
              placeholder="blurred"
            />
            </div>


        <p className="mt-6 text-3xl text-center">
          {contactform.heading}
        </p>
        <form action="#" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
          <div className="mt-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-gray-700"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-gray-700"
                />
              </div>

              <div className="col-span-6">
                <div className="flex justify-between">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium"
                  >
                    Subject
                  </label>
                  <span className="text-sm">Optional</span>
                </div>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  autoComplete="email"
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-gray-700"
                />
              </div>

              <div className="col-span-6">
                <div className="flex justify-between">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    How can I help?
                  </label>
                  <span className="text-sm">
                    Max. 500 characters
                  </span>
                </div>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md text-gray-700"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2 py-3 text-left">
            <button
              type="submit"
              className="`inline-flex items-center justify-center px-8 py-3 text-base font-medium transition-colors duration-100 rounded-md text-white bg-darkGreen hover:bg-highlightGreen"
            >
              Submit
            </button>
          </div>
        </form>
    </div>
  )
}

export default ContactPageTemplate
