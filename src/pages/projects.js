import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import List from "../sections/List/List";

const Projects = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <section>
      <Layout>
        <Seo
          title="Projects | Goldy Mariz Lunesa"
          description="Projects by @gmlunesa"
          slug="/projects"
        />
        <List edges={edges} isBlog={false} />
      </Layout>
    </section>
  );
};

export default Projects;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            date(formatString: "YYYY")
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
