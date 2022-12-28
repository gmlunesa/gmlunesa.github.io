import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import BlogList from "../sections/Blog/BlogList";

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  // const Posts = edges
  //   .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
  //   .map((edge) => <BlogLink key={edge.node.id} post={edge.node} />);
  return (
    <section>
      <Layout>
        <Seo
          title="Blog | Goldy Mariz Lunesa"
          description="Official blog of gmlunesa"
          slug="/blog"
        />
        <BlogList edges={edges} />
      </Layout>
    </section>
  );
};
export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            dateOriginal: date
            slug
            title
            tag
            tags
            description
            featuredImage {
              publicURL
              childrenImageSharp {
                fluid {
                  src
                }
              }
              childImageSharp {
                gatsbyImageData(width: 400)
              }
            }
          }
        }
      }
    }
  }
`;
