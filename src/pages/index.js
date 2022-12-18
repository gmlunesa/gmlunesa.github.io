import * as React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Hero from "../sections/landing/Hero";
import About from "../sections/Landing/About";
import Cta from "../sections/Landing/CTA";
import Projects from "../sections/landing/Projects";
import LatestBlog from "../sections/Landing/LatestBlog";

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <>
    <Layout>
      <Seo title="Home | Goldy Mariz Lunesa" />
      <Hero />
      <About />
      <Cta />
      <Projects />
      <LatestBlog post={edges[0]} />
    </Layout>
  </>
);

export default IndexPage;

export const latestBlogQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1
    ) {
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
            }
          }
        }
      }
    }
  }
`;
