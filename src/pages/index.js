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
    allHashNodePost: { edges },
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
          _id
        }
      }
    }
  }
`;
