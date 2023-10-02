
import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo'
import {
  imgContainer,
  img
} from '../components/layout.module.css'


const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="My Portfolio">
        <div className={imgContainer}>
          <h1>For Hire</h1>
          <StaticImage 
            alt="Benjamin Knorr"
            src='../images/profile.jpg'
            className={img}
          />
          <p>Benjamin Knorr</p>
        </div>
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home Page" />
