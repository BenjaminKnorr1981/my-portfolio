import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import { imgContainer, img, contactInfo } from '../components/layout.module.css'

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle='About Me'>
        <p>
          I started coding because I couldn't do the work I was raised into, because of 
          mental health isseus I didn't know I had, until it was to late. Don't worry the
          issues are now managed with the help of medication, but the physical side-affects 
          are still pressent, which doesn't allow me to do manual labour any more. Which is
          a shame, because I love being outside.
        </p>

        <p>
          By now I learned how to create website's and webapplications by using HTML, CSS, PHP, 
          Databases, JavaScript and Frameworks. I want to learn more than I already do. Although 
          I'm past the age of 40 years, <b>you are never to old to learn!</b>
        </p>

        <p>
          To clarify, this website is writen in React, something I picked-up reasondly, without 
          a learning institute like the Bit-Academy. Most I learned was with help of the Bit-Academy
          But I ran of time. Not because I don't have time to learn more, but because I was able to 
          learn with help of a STAP-budget. This was provided by the Dutch government to stimulate
          learning new skills. Skills that eventualy leed to work. What I didn't know was, no-one is
          waiting for a 40+ year old, who just learnd the skills, but hasn't got any experience. Aparently
          the time learnig the skills, by actualy coding, doesn't count as experience.
        </p>

        <p>
          I'm open for any kind of jobs, even freelance. My son is interested in coding too. So if someone
          is willing to give me a chance, before my son has his first internship, would be very much appriciated.
        </p>

        <div className={imgContainer}>
          <h1>For Hire</h1>
          <StaticImage 
            alt="Benjamin Knorr"
            src='../images/me.jpeg'
            className={img}
          />
          <div className={contactInfo}>
          <p>Benjamin Knorr</p>
          <a href='mailto: benjaminknorr@hotmail.com'>Please click here to send me an email</a>
          </div>
        </div>
      </Layout>
    </main>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage