import React from "react";
import { graphql } from "gatsby";
import BlogPageLayout from "../layouts/BlogPageLayout";

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <BlogPageLayout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </BlogPageLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`