import React from 'react'
import Header from "../components/Header"
import { TextImageSplit, SectionHeading } from "../components/Sections"

function ContactPageTemplate({
  heading,
  subheading,
  contactform,
  office
}) {
  return (
    <div className='mx-auto pb-12 text-beige bg-beige'>
      <div className="relative h-full bg-darkGreen text-center py-12 lg:py-36 items-center">
        <div className="mx-16 sm:mx-32 md:mx-40 lg:mx-56 mt-6">
          <h1 className="font-nunito text-left text-beige text-5xl lg:text-7xl xs:pt-20 md:pt-28 lg:pt-36">LET'S </h1>
          <h1 className="font-volkorn text-left text-beige text-5xl lg:text-7xl pt-2 ml-6">CONNECT</h1>
          <div className="w-1/3 md:w-1/5 h-8px bg-purple mx-auto mt-6 ml-12 float-left"></div>
          <br></br>
        </div>
      </div>

    <div className='w-8/12 mx-auto text-darkGreen'>
        <h1 className="mt-12 text-xl text-center">
          {contactform.heading}
        </h1>
        <h1 className="mt-2 text-xl text-center">
        If you're looking for a FREE 30-minute Discovery Call, click here.
        </h1>

      {/*Desktop contacts bar */}
       <div className="hidden lg:grid mx-12 mt-2 grid-cols-3 gap-6">
          <div className="text-center col-span-1">
            Email beth@digitallydarling.ca
          </div>
          <div className="text-center col-span-1">
          Facebook @digitallydarling 
          </div>
          <div className="text-center col-span-1">
           Instagram @digitallydarling
          </div>
        </div>

      {/*Mobile contacts bar */}
      <div className="block lg:hidden pt-4">
      <h1 className="text-center pt-2">
            Email beth@digitallydarling.ca
        </h1>
        <h1 className="text-center pt-2">
          Facebook @digitallydarling 
        </h1>
        <h1 className="text-center pt-2">
           Instagram @digitallydarling
        </h1>
      </div>

        <form action="#" method="POST">
          <div className="mt-6 font-nunito text-md">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label
                  htmlFor="name"
                  className="block font-medium"
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
                  className="block font-medium"
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
                    className="block font-medium"
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
                    className="block font-medium"
                  >
                    Message
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
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactPageTemplate
