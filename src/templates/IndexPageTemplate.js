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
      <div className="relative min-w-full h-full py-12 lg:py-0 md:h-40rem lg:h-44rem overflow-hidden bg-green text-center md:pb-12 lg:pb-20 z-10 sm:pb-14  md:pb-16 lg:pb-24 items-center">
        <div className="w-4/5 md:w-1/2 mx-auto">
          <h3 className="font-nunito text-beige text-3xl sm:pt-28">{line1}</h3>
          <h3 className="font-nunito text-beige text-3xl py-2">{line2}</h3>
          <h1 className="font-volkorn mt-2 text-beige text-3xl md:text-6xl md:py-2">
            {subhead1}
          </h1>
          <h1 className="font-volkorn mt-2 text-beige text-3xl md:text-6xl md:py-2 pb-6">
            {subhead2}
          </h1>
          <br></br>
          <div className="w-1/3 md:w-1/5 h-8px bg-purple mx-auto"></div>

          <PrimaryButton to="/contact" className="mt-6 lg:mt-10 self-center font-volkorn">
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

      {/*Desktop Services section */}
      <div className="hidden lg:flex min-w-full h-full overflow-hidden bg-purple text-center pb-8 lg:pb-20 pt-8 lg:pt-20 z-10 items-center">
        <div className="w-4/5 mx-auto text-darkGreen">
          <div className="text-3xl text-left pb-8">THIS IS HOW I CAN HELP...</div>
          <div className="flex flex-row w-full items-center pb-4">
            <div className="flex-col float-left mx-auto text-2xl px-2">
            <StaticImage
              src="../img/bullhorn.png"
              alt="Social Media Support"
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
              <p>Let’s set up a strategy so you can show up consistently and authentically on social media and increase your impact, visibility and engagement.</p>
            </div>
            <div className="flex-col float-left mx-auto text-2xl px-2">
            <StaticImage
              src="../img/creativity.png"
              alt="Creative Services"
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
              <p>Whether working with design and editing programs directly, overloaded with other tasks, or simply want beautifully designed graphics and materials that reflect you and your brand, I have the skills you need.</p>
            </div>
            <div className="flex-col float-left mx-auto text-2xl px-2">
            <StaticImage
              src="../img/web-design.png"
              alt="Web Design"
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
              <p>You've always been able to wear all the hats in your business, but lately, you can't seem to shake the feeling that you're falling behind.</p>
            </div>
          </div>
          <PrimaryButton to="/contact" className="mt-6">
            GET STARTED
          </PrimaryButton>
        </div>
      </div>

      {/* Mobile Services Section*/}
      <div className="flex lg:hidden h-full flex min-w-full overflow-hidden bg-purple text-center pb-8 lg:pb-20 pt-8 lg:pt-20 z-10 items-center">
        <div className="w-11/12 md:w-3/4 mx-auto text-darkGreen">
          <div className="text-3xl text-left pb-8 text-center font-semibold">THIS IS HOW I CAN HELP</div>
            <div className="flex-col mx-auto text-2xl">
            <StaticImage
              src="../img/bullhorn.png"
              alt="Social Media Support"
              className="flex items-center mx-auto m-2"
              imgClassName="rounded"
              layout="fixed"
              width={100}
              height={100}
              loading="eager"
              backgroundColor="transparent"
              placeholder="blurred"
            />
              <p className="text-2xl">Social Media Support</p>
              <p className="text-xl">Let’s set up a strategy so you can show up consistently and authentically on social media and increase your impact, visibility and engagement.</p>
            </div>
            <br></br>
            <div className="flex-col mx-auto text-2xl">
            <StaticImage
              src="../img/creativity.png"
              alt="Creative Services"
              className="flex items-center mx-auto m-2"
              imgClassName="rounded"
              layout="fixed"
              width={100}
              height={100}
              loading="eager"
              backgroundColor="transparent"
              placeholder="blurred"
            />
            <p className="text-2xl">Creative Services</p>
              <p className="text-xl">Whether working with design and editing programs directly, overloaded with other tasks, or simply want beautifully designed graphics and materials that reflect you and your brand, I have the skills you need.</p>
            </div>
            <br></br>
            <div className="flex-col mx-auto text-2xl">
            <StaticImage
              src="../img/web-design.png"
              alt="Web Design"
              className="flex items-center mx-auto m-2"
              imgClassName="rounded"
              layout="fixed"
              width={100}
              height={100}
              loading="eager"
              backgroundColor="transparent"
              placeholder="blurred"
            />
            <p className="text-2xl">Website Support</p>
              <p className="text-xl">You've always been able to wear all the hats in your business, but lately, you can't seem to shake the feeling that you're falling behind.</p>
            </div>
            <br></br>
          <PrimaryButton to="/contact" className="mt-6">
            GET STARTED
          </PrimaryButton>
        </div>
      </div>

      {/*Desktop Testimonials Section*/}
      <div className="hidden lg:flex relative min-w-full h-full overflow-hidden bg-beige text-center pb-8 lg:pb-20 pt-8 lg:pt-20 z-10 items-center">
        <div className="w-4/5 md:w-3/4 mx-auto my-auto text-darkGreen">
          <h1 className="text-3xl lg:text-5xl font-bold pb-2">
            Praise from clients
          </h1>

        <div className="grid grid-cols-2 gap-1 items-center pb-4">
            <div className="flex-col mx-auto text-2xl px-6">
            <StaticImage
              src="../img/KatherineMoller.jpg"
              alt="Instagram"
              className="flex items-center mx-auto m-2"
              imgClassName="rounded-full"
              layout="fixed"
              width={220}
              height={220}
              loading="eager"
              backgroundColor="transparent"
              placeholder="blurred"
            />
            <div>
              <br></br>
              <p className="text-xl">"Beth has helped me streamline my business in so many ways. She has taken over many of the daily tasks which have left me with more time to think about growing my business. Working with Beth has helped me become more organized and I am now providing my clients with their services on a regular basis without the last-minute panic that I used to experience all of the time!"</p>
              <br></br>
              <p className="text-xl">KATHERINE MOLLER, AWARD-WINNING EDUCATOR AND FIDDLER</p>
            </div>
          </div>

            <div className="flex-col mx-auto text-2xl px-6 mt-14">
            <StaticImage
              src="../img/MeganWilliamson.jpg"
              alt="Instagram"
              className="flex items-center mx-auto m-2"
              imgClassName="rounded-full"
              layout="fixed"
              width={220}
              height={220}
              loading="eager"
              backgroundColor="transparent"
              placeholder="blurred"
            />
            <div>
            <br></br>
              <p className="text-xl">"I love working with Beth because she demonstrates clear communication and has a very quick turnaround in email requests. I can rely on her for support with no hesitation which is a huge relief for me as a small business owner. She is also very knowledgeable in applications and areas that I am still learning, so asking her for advice and direction has been a trade-off of more time for myself to put towards my clients. She helped me to expand my company which will continue to do so."</p>
            <br></br>
              <p className="text-xl">MEGAN WILLIAMSON, OWNER OF OCEAN REHAB AND FITNESS </p>
            </div>
            </div>
          </div>
          <br></br>
        </div>
        </div>

    {/*Mobile Testimonials Section*/}
    <div className="flex lg:hidden relative min-w-full h-full overflow-hidden bg-beige text-center pb-8 lg:pb-20 pt-8 lg:pt-20 z-10 items-center">
        <div className="w-4/5 md:w-3/4 mx-auto my-auto text-darkGreen">
          <h1 className="text-3xl lg:text-5xl font-bold pb-2">
            Praise from clients
          </h1>
            <br></br>
            <div className="flex-col mx-auto text-2xl px-6">
            <StaticImage
              src="../img/KatherineMoller.jpg"
              alt="Instagram"
              className="flex items-center mx-auto m-2"
              imgClassName="rounded-full"
              layout="fixed"
              width={200}
              height={200}
              loading="eager"
              backgroundColor="transparent"
              placeholder="blurred"
            />
            <div>
              <br></br>
              <p className="text-xl">"Beth has helped me streamline my business in so many ways. She has taken over many of the daily tasks which have left me with more time to think about growing my business. Working with Beth has helped me become more organized and I am now providing my clients with their services on a regular basis without the last-minute panic that I used to experience all of the time!"</p>
              <br></br>
              <p className="text-xl">KATHERINE MOLLER, AWARD-WINNING EDUCATOR AND FIDDLER</p>
            </div>
            </div>

            <div className="flex-col mx-auto text-2xl pt-12 px-6">
            <StaticImage
              src="../img/MeganWilliamson.jpg"
              alt="Instagram"
              className="flex items-center mx-auto m-2"
              imgClassName="rounded-full"
              layout="fixed"
              width={200}
              height={200}
              loading="eager"
              backgroundColor="transparent"
              placeholder="blurred"
            />
            <div>
            <br></br>
              <p className="text-xl">"I love working with Beth because she demonstrates clear communication and has a very quick turnaround in email requests. I can rely on her for support with no hesitation which is a huge relief for me as a small business owner. She is also very knowledgeable in applications and areas that I am still learning, so asking her for advice and direction has been a trade-off of more time for myself to put towards my clients. She helped me to expand my company which will continue to do so."</p>
            <br></br>
              <p className="text-xl">MEGAN WILLIAMSON, OWNER OF OCEAN REHAB AND FITNESS </p>
            </div>
          </div>
          <br></br>
        </div>
        </div>

    {/*Desktop About section */}
    <div className="hidden lg:flex bg-beige flex bg-beige">
      <div className="w-1/2 xl:pl-16 p-12 mx-auto my-auto">
        <div className="flex-col mx-auto text-2xl xl:px-6">
            <StaticImage
              src="../img/BethHeadshot.jpg"
              alt="Instagram"
              className="flex items-center mx-auto m-2 border-8 border-white rounded-3xl"
              imgClassName="rounded"
              layout="fixed"
              width={450}
              height={450}
              loading="eager"
              backgroundColor="transparent"
              placeholder="blurred"
            />
        </div>
      </div>

      <div id="about" className="w-1/2 bg-darkGreen text-black p-12 pt-32 pr-32 pb-40">
      <h3 className="font-bold text-white text-3xl">Hey there!</h3>
      <br></br>
      <h1 className="font-bold text-white text-5xl">I'm Beth</h1>
      <br></br>
      <p className="text-white text-xl">My mission is to encourage others to focus on their main base while also supporting them in crossing off tasks so that they can devote their whole attention on their true passions. I'm thrilled you've stopped by Digitally Darling! Let's save you time, show everyone what you have to offer, and get you back to your reason why.</p>
        <br></br>
        <SecondaryButton to="/contact" className="mt-6">
          GET STARTED
        </SecondaryButton>
      </div>
      <br></br>
    </div>

    {/*Mobile About section */}
    <div id="aboutMe" className="lg:hidden w-full bg-darkGreen text-black p-8">
      <div className="flex-col mx-auto text-2xl xl:px-6 pb-8">
        <StaticImage
          src="../img/BethHeadshot.jpg"
          alt="Instagram"
          className="flex items-center mx-auto m-2"
          imgClassName="rounded"
          layout="fixed"
          width={260}
          height={260}
          loading="eager"
          backgroundColor="transparent"
          placeholder="blurred"
        />
        </div>
      <h3 className="font-bold text-white text-3xl">Hey there!</h3>
      <br></br>
      <h1 className="font-bold text-white text-5xl">I'm Beth</h1>
      <br></br>
      <p className="text-white text-xl">My mission is to encourage others to focus on their main base while also supporting them in crossing off tasks so that they can devote their whole attention on their true passions. I'm thrilled you've stopped by Digitally Darling! Let's save you time, show everyone what you have to offer, and get you back to your reason why.</p>
        <br></br>
        <div className="text-center">
        <SecondaryButton to="/contact" className="mt-6">
          GET STARTED
        </SecondaryButton>
        </div>
      </div>
  </div>
  )
}

export default IndexPageTemplate
