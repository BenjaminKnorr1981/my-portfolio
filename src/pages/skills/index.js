import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { skillLinks } from '../../components/layout.module.css'


const Skills = ({ data }) => {
    return (
        <Layout pageTitle="Skills">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>
                            <Link to={`/skills/${node.frontmatter.slug}`} className={skillLinks}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx {
            nodes {
                frontmatter {
                    title
                    slug
                }
                id
            }
        }
    }
`

export default Skills
export const Head = () => <Seo title="Skills" />