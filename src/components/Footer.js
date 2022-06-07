import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <footer className="bg-purple text-darkGreen py-6">
        <div className="flex flex-row w-3/4 lg:w-2/5  m-auto items-center pb-4">
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
        
        <div className="flex flex-row w-1/4 m-auto items-center">
          <div className="flex justify-center m-auto">
            <StaticImage
              src="../img/Facebook.png"
              alt="DD Icon"
              className="flex justify-center m-2"
              imgClassName="rounded"
              layout="fixed"
              width={40}
              height={40}
              loading="eager"
              backgroundColor="transparent"
              placeholder="blurred"
            />
            </div>

            <div className="flex justify-center m-auto">
            <StaticImage
              src="../img/Instagram.png"
              alt="DD Icon"
              className="flex justify-center m-2"
              imgClassName="rounded"
              layout="fixed"
              width={40}
              height={40}
              loading="eager"
              backgroundColor="transparent"
              placeholder="blurred"
            />
            </div>

            <div className="flex justify-center m-auto">
            <StaticImage
              src="../img/Email.png"
              alt="DD Icon"
              className="flex justify-center m-2"
              imgClassName="rounded"
              layout="fixed"
              width={40}
              height={40}
              loading="eager"
              backgroundColor="transparent"
              placeholder="blurred"
            />
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
