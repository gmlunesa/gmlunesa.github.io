import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

// Components
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Hero from "../sections/Landing/Hero";
import About from "../sections/Landing/About";
import Cta from "../sections/Landing/CTA";
import Projects from "../sections/Landing/Projects";
import LatestBlog from "../sections/Landing/LatestBlog";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      hashnode {
        publication(host: "blog.gmlunesa.com") {
          title
          posts(first: 10) {
            edges {
              node {
                id
                publishedAt
                title
                brief
                url
                slug
                readTimeInMinutes
                coverImage {
                  url
                }
              }
            }
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <>
      <Layout>
        <Seo title="Home | Goldy Mariz Lunesa" />
        <Hero />
        <About />
        <Cta />
        <Projects />
        <LatestBlog post={data.hashnode.publication.posts.edges[0]} />
      </Layout>
    </>
  );
};

export default IndexPage;
