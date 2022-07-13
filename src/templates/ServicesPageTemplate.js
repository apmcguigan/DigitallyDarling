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
          <h1 className="text-beige text-7xl pt-4 lg:pt-24">{heading}</h1>
          <br></br>
          <h1 className="text-beige text-2xl lg:text-5xl py-2"><p>TAKE BACK YOUR TIME TO FOCUS ON WHAT MATTERS <br></br><b> THE MOST </b></p></h1>
          <br></br>
          <div className="w-1/3 md:w-1/5 h-8px bg-purple mx-auto"></div>
        </div>
      </div>

      {/* Desktop Social Media Services*/}
      <div className="hidden lg:flex bg-green flex mx-auto">
        <div className="w-1/2 p-12 bg-green mx-auto my-auto text-center text-beige px-48">
          <h1 className="text-5xl text-left">SOCIAL MEDIA MANAGEMENT</h1>
          <br></br>
          <ul className="text-xl text-left list-disc text-beige">
            <li className="text-purple pt-2"><span className="text-beige">Copywriting for social media content</span></li>
            <li className="text-purple pt-2"><span className="text-beige">Branded visuals/graphics creation</span></li>
            <li className="text-purple pt-2"><span className="text-beige">Social media scheduling</span></li>
            <li className="text-purple pt-2"><span className="text-beige">Creation and management of a custom content calendar</span></li>
            <li className="text-purple pt-2"><span className="text-beige">Social media strategy</span></li>
            <li className="text-purple pt-2"><span className="text-beige">Analyzing results and insights</span></li>
          </ul>
          <br></br>
          <h1 className="text-4xl pb-1 text-left">Networks I Support</h1>
          <ul className="text-xl text-left list-disc text-beige">
            <li className="text-purple pt-2"><span className="text-beige">Facebook</span></li>
            <li className="text-purple pt-2"><span className="text-beige">Instagram</span></li>
            <li className="text-purple pt-2"><span className="text-beige">Twitter</span></li>
            <li className="text-purple pt-2"><span className="text-beige">Pinterest</span></li>
            <li className="text-purple pt-2"><span className="text-beige">LinkedIn</span></li>
            <li className="text-purple pt-2"><span className="text-beige">Youtube</span></li>
          </ul>
        </div>

       <div id="about" className="w-1/2 bg-beige text-darkGreen p-12 pt-32 pb-40 text-center">
        <div className="w-1/2 px-4 float-left">
          <h3 className="font-bold text-3xl pb-12">BASIC</h3>
          <div className="text-lg">
          <p>8 - 10 social media posts/month</p>
          <p>Initial social media audit</p>
          <p className="pb-16">Bi-weekly task updates</p>
          <br></br>
          <p>Starting at $399</p>
          </div>
          <PrimaryButton to="/contact" className="mt-6">
            GET STARTED
          </PrimaryButton>

        </div>
        <div className="w-1/2 px-4 float-right text-center">
          <h3 className="font-bold text-3xl pb-12">PREMIUM</h3>
          <div className="text-lg">
            <p>8 - 10 social media posts/month</p>
            <p>Initial social media audit</p>
            <p>Bi-weekly task updates</p>
            <p className="pb-16">Quarterly progress reports</p>
            <p>Starting at $749</p>
            </div>
            <PrimaryButton to="/contact" className="mt-6">
              GET STARTED
            </PrimaryButton>
        </div>
      </div>
      <br></br>
    </div>

    {/* Mobile Social Media Services*/}
      <div className="flex lg:hidden bg-green flex mx-auto">
        <div className="w-7/8 p-4 mx-auto my-auto text-center text-beige">
          <h1 className="text-5xl text-left">SOCIAL MEDIA MANAGEMENT</h1>
          <br></br>
          <ul className="text-xl text-left list-disc text-beige">
            <li className="text-purple pt-2"><span className="text-beige">Copywriting for social media content</span></li>
            <li className="text-purple pt-2"><span className="text-beige">Branded visuals/graphics creation</span></li>
            <li className="text-purple pt-2"><span className="text-beige">Social media scheduling</span></li>
            <li className="text-purple pt-2"><span className="text-beige">Creation and management of a custom content calendar</span></li>
            <li className="text-purple pt-2"><span className="text-beige">Social media strategy</span></li>
            <li className="text-purple pt-2"><span className="text-beige">Analyzing results and insights</span></li>
          </ul>
          <br></br>
          <h1 className="text-4xl pb-1 text-left">Networks I Support</h1>
          <ul className="text-xl text-left list-disc text-beige">
            <li className="text-purple pt-2"><span className="text-beige">Facebook</span></li>
            <li className="text-purple pt-2"><span className="text-beige">Instagram</span></li>
            <li className="text-purple pt-2"><span className="text-beige">Twitter</span></li>
            <li className="text-purple pt-2"><span className="text-beige">Pinterest</span></li>
            <li className="text-purple pt-2"><span className="text-beige">LinkedIn</span></li>
            <li className="text-purple pt-2"><span className="text-beige">Youtube</span></li>
          </ul>
        </div>
       <div id="about" className="w-1/2 bg-beige text-darkGreen p-12 pt-32 pb-40 text-center">
        <div className="w-1/2 px-4 float-left">
          <h3 className="font-bold text-3xl pb-12">BASIC</h3>
          <div className="text-lg">
          <p>8 - 10 social media posts/month</p>
          <p>Initial social media audit</p>
          <p className="pb-16">Bi-weekly task updates</p>
          <br></br>
          <p>Starting at $399</p>
          </div>
          <PrimaryButton to="/contact" className="mt-6">
            GET STARTED
          </PrimaryButton>

        </div>
        <div className="w-1/2 px-4 float-right text-center">
          <h3 className="font-bold text-3xl pb-12">PREMIUM</h3>
          <div className="text-lg">
            <p>8 - 10 social media posts/month</p>
            <p>Initial social media audit</p>
            <p>Bi-weekly task updates</p>
            <p className="pb-16">Quarterly progress reports</p>
            <p>Starting at $749</p>
            </div>
            <PrimaryButton to="/contact" className="mt-6">
              GET STARTED
            </PrimaryButton>
        </div>
      </div>
      <br></br>
    </div>



  {/* Desktop Creative Services*/}
    <div className="hidden lg:flex bg-beige flex bg-beige">
      <div id="about" className="w-1/2 text-darkGreen p-12 pt-32 pr-32 pb-8 ml-12 text-center">
        <h1 className="font-bold text-5xl">Creative Services</h1>
        <br></br>
          <ul className="text-xl text-left list-disc text-beige pl-12">
              <li className="text-purple pt-2"><span className="text-darkGreen">Graphics creation for digital ads, magazines, brochures, social media templates, flyers, etc. </span></li>
              <li className="text-purple pt-2"><span className="text-darkGreen">Editing of photos, videos, and audios</span></li>
              <li className="text-purple pt-2"><span className="text-darkGreen">Email marketing with Mailchimp, Weber, Constant Contact and more</span></li>
              <li className="text-purple pt-2"><span className="text-darkGreen">Editing and proofreading of blog posts and other marketing materials</span></li>
            </ul>

            <div className="float-left">
          <SecondaryButton to="/contact" className="mt-6 ml-6">
            GET STARTED
          </SecondaryButton>
          </div>
      </div>

      <div className="w-1/2 xl:pl-16 p-12 mx-auto my-auto">
        <div className="flex-col ml-auto mr-60 text-2xl xl:px-6">
            <StaticImage
              src="../img/tree.jpg"
              alt="Instagram"
              className="flex items-center mx-auto m-2 border-8 border-white rounded-3xl"
              imgClassName=""
              layout="fixed"
              width={360}
              height={360}
              loading="eager"
              backgroundColor="transparent"
              placeholder="blurred"
            />
        </div>
      </div>
    </div>


      {/* Website Support Services*/}
      <div className="hidden lg:flex bg-beige flex bg-beige">
        <div className="w-1/2 xl:pl-16 p-12 mx-auto my-auto">
          <div className="flex-col mr-auto ml-48 text-2xl xl:px-6">
              <StaticImage
                src="../img/tree.jpg"
                alt="Instagram"
                className="flex items-center mx-auto m-2 border-8 border-white rounded-3xl"
                imgClassName=""
                layout="fixed"
                width={360}
                height={360}
                loading="eager"
                backgroundColor="transparent"
                placeholder="blurred"
              />
          </div>
        </div>

        <div id="about" className="w-1/2 text-darkGreen p-12 pt-32 pr-32 pb-40 text-center">
          <h1 className="font-bold text-5xl text-left">Website Support</h1>
          <br></br>
            <ul className="text-xl text-left list-disc text-beige pl-12">
                <li className="text-purple pt-2"><span className="text-darkGreen">Updating and reformatting content</span></li>
                <li className="text-purple pt-2"><span className="text-darkGreen">Simple development and maintenance</span></li>
                <li className="text-purple pt-2"><span className="text-darkGreen">Creating landing pages</span></li>
                <li className="text-purple pt-2"><span className="text-darkGreen">Optimizing for SEO</span></li>
              </ul>
              <div className="float-left">
            <SecondaryButton to="/contact" className="mt-6 ml-6">
              GET STARTED
            </SecondaryButton>
            </div>
        </div>
      </div>

      {/* Desktop Services Packages Details*/}
      <div className="hidden lg:flex min-w-full h-full overflow-hidden bg-green text-center z-10 py-2 py-4 items-center">
        <div className="w-3/5 mx-auto text-beige">
          <h1 className="text-5xl lg:text-7xl  sm:pt-28">Services</h1>
          <br></br>
          <div className="w-1/3 md:w-1/5 h-8px bg-purple mx-auto"></div>
          <br></br>
          <p className="text-xl">Additional hours will be charged at $35 per hour, or you may choose to upgrade to the next package tier.</p>
          <br></br>
          <br></br>

          <div class="grid grid-cols-3 gap-1">
            <div>
              <h2 className="text-3xl">
              DELIGHTFUL
              </h2>
              <br></br>
              <p>10 hours of work</p>
              <p>All services except social media</p>
              <p>Weekly task updates</p>
              <br></br>
              <p>Starting at $335</p>
            </div>
            
            <div>
              <h2 className="text-3xl">
              DASHING
              </h2>
              <br></br>
              <p>15 hours of work</p>
              <p>All services except social media</p>
              <p>Weekly task updates</p>
              <br></br>
              <p>Starting at $495</p>
            </div>

            <div>
              <h2 className="text-3xl">
              DARLING
              </h2>
              <br></br>
              <p>20 hours of work</p>
              <p>All services except social media</p>
              <p>Weekly task updates</p>
              <br></br>
              <p>Starting at $665</p>
            </div>
          </div>

          <div className="py-8">
          <PrimaryButton to="/contact" className="mt-6 lg:mt-10 self-center">
            WORK WITH ME
          </PrimaryButton>
          </div>

          <p className="text-xl pt-4 pb-8">
          If you're looking for a combination of social media and creative/website support, please contact me for a custom quote!
          </p>
          
        </div>
    </div>

</div>
</>
  )
}

export default ServicesPageTemplate
