import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <footer className="bg-purple text-darkGreen py-6">
        <div className="flex flex-row w-1/2 md:w-1/6 m-auto items-center">
          <div className="flex justify-center m-auto">
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
            </div>

            <div className="flex justify-center m-auto">
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
            </div>

            <div className="flex justify-center m-auto">
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
