import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <footer className="bg-purple text-darkGreen py-6">
          <div className="flex flex-row w-3/4 md:w-1/2 lg:w-1/3 m-auto items-center pb-4">
          <div className="flex justify-center m-auto">
                <Link
                  to="/"
                  className="flex justify-center mx-2"
                >
                  Home
                </Link>
                </div>

                <div className="flex justify-center m-auto">
                <Link
                  to="/About"
                  className="flex justify-center mx-2"
                >
                  About
                </Link>
                </div>

                <div className="flex justify-center m-auto">
                <Link
                  to="/Services"
                  className="flex justify-center mx-4"
                >
                  Services
                </Link>
                </div>

                <div className="flex justify-center m-auto">
                <Link
                  to="/Contact"
                  className="flex justify-center mx-2"
                >
                  Contact
                </Link>
                </div>

        </div>
        
        <div className="flex flex-row w-1/2 md:w-1/6 m-auto items-center">
          <div className="flex justify-center m-auto">
            <a href="https://www.facebook.com/digitallydarling">
            <StaticImage
              src="../img/DD_Facebook.png"
              alt="Facebook"
              className="flex justify-center m-2"
              imgClassName="rounded"
              layout="fixed"
              width={40}
              height={40}
              loading="eager"
              backgroundColor="transparent"
              placeholder="blurred"
            />
            </a>
          </div>

            <div className="flex justify-center m-auto">
            <a href="https://www.instagram.com/digitallydarling/">
              <StaticImage
                src="../img/DD_Instagram.png"
                alt="Instagram"
                className="flex justify-center m-2"
                imgClassName="rounded"
                layout="fixed"
                width={40}
                height={40}
                loading="eager"
                backgroundColor="transparent"
                placeholder="blurred"
              />
              </a>
            </div>

            <div className="flex justify-center m-auto">
              <a href="mailto:beth@digitallydarling.ca">
              <StaticImage
                src="../img/DD_Email.png"
                alt="Email"
                className="flex justify-center m-2"
                imgClassName="rounded"
                layout="fixed"
                width={40}
                height={40}
                loading="eager"
                backgroundColor="transparent"
                placeholder="blurred"
              />
              </a>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-center">
          Copy Right © 2022 Digitally Darling Creative Services. All Rights Reserved. 
          </p>
        </div>
    </footer>
  )
}

export default Footer
