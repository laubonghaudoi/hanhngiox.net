import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/grandViewTypography"
import InstallPageLayout from "../layouts/InstallPageLayout";

export default ({ data }) => {
  console.log(data)
  return (
    <InstallPageLayout>
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
          </div>
        ))}
      </div>
    </InstallPageLayout>
  )
}

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
          excerpt
        }
      }
    }
  }
`