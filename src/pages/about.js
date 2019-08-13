import React from 'react'
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/grandViewTypography"
import PageLayout from '../layouts/PageLayout'

const AboutPage = ({ data }) => (
  <PageLayout
    css={css`
    margin: 0 auto;
    max-width: 700px;
    padding: ${rhythm(2)};
    padding-top: ${rhythm(1.5)};
  `}>
    <div>
      <h1
        css={css`
          display: inline-block;
          border-bottom: 1px solid;
        `}
      >
        雜談
      </h1>
      <h4>{data.allMarkdownRemark.totalCount} 篇文章</h4>
      
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div
          key={node.id}
          css={css`margin-bottom: ${rhythm(2)};`}
        >
          <Link
            to={node.fields.slug}
            css={css`
              text-decoration: none;
              color: inherit;
            `}
          >
          <h3
            css={css`
              margin-bottom: ${rhythm(1 / 4)};
            `}
          >
            {node.frontmatter.title}{" "}
            <span
              css={css`
                color: #bbb;
              `}
            >
              — {node.frontmatter.date}
            </span>
          </h3>

          <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  </PageLayout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default AboutPage;
