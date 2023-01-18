import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import List from "../sections/List/List";

const Blog = ({
  data: {
    allHashNodePost: { edges },
  },
}) => {
  return (
    <section>
      <Layout>
        <Seo
          title="Blog | Goldy Mariz Lunesa"
          description="Official blog of gmlunesa"
          slug="/blog"
        />
        <List edges={edges} isBlog={true} />
      </Layout>
    </section>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    allHashNodePost(sort: { fields: [dateAdded], order: DESC }) {
      edges {
        node {
          dateAdded
          brief
          slug
          title
          readingTime {
            text
          }
          coverImage {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
          _id
        }
      }
    }
  }
`;
