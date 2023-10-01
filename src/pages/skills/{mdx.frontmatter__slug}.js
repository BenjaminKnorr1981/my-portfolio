import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { 
    imgDiv,
    imgDiv2,
    mdxImg,
    mdxImg2,
    decoDiv } from '../../components/layout.module.css'


const SkillPost = ({ data, children }) => {
    const image = getImage(data.mdx.frontmatter.hero_image)
    const image2 = getImage(data.mdx.frontmatter.hero_image2)
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            {children}
            <div className={imgDiv}>
                <div className={decoDiv}></div>
                <GatsbyImage
                    image={image}
                    alt={data.mdx.frontmatter.hero_image_alt}
                    className={mdxImg}
                />
            </div>
            <div className={imgDiv2}>
                <div className={decoDiv}></div>
                <GatsbyImage
                    image={image2}
                    alt={data.mdx.frontmatter.hero_image_alt2}
                    className={mdxImg2}
                />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                hero_image_alt
                hero_image_alt2
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                hero_image2 {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default SkillPost