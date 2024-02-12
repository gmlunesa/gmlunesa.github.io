import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import List from "../sections/List/List";

const Blog = () => {
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
  console.log(data.hashnode.publication.posts.edges);
  return (
    <section>
      <Layout>
        <Seo
          title="Blog | Goldy Mariz Lunesa"
          description="Official blog of gmlunesa"
          slug="/blog"
        />
        <List edges={data.hashnode.publication.posts.edges} isBlog={true} />
      </Layout>
    </section>
  );
};

export default Blog;
