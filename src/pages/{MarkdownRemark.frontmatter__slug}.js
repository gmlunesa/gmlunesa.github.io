import { graphql, Link } from "gatsby";
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Seo
        title={frontmatter.title}
        description={frontmatter.description}
        slug={frontmatter.slug}
      />
      {/** TODO: Custom image per blog article */}
      {/* <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} /> */}
      <section className="dark:bg-gray-800 dark:text-gray-100 bg-gray-100 text-gray-800 py-10">
        <article className="max-w-4xl px-6 py-10 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
          <div className="w-full mx-auto space-y-4 text-center">
            <p className="text-xs font-semibold tracking-wider uppercase text-rose-500">
              {frontmatter.tag}
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              {frontmatter.title}
            </h1>
            <p className="text dark:text-gray-400">
              <Link to="/" className="text-rose-500 dark:text-rose-400">
                <span itemprop="name">Goldy Mariz Lunesa</span>
              </Link>
              &nbsp;◇&nbsp;{frontmatter.date}
            </p>
          </div>
          <div className="dark:text-gray-100">
            <div
              className="post-body text-md"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
          <div className="pt-12 border-t dark:border-gray-700">
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
              <StaticImage
                src="../images/landing/gmlunesa.jpg"
                className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
              />

              <div className="flex flex-col">
                <h4 className="text-lg font-semibold">Goldy Mariz Lunesa</h4>
                <p className="dark:text-gray-400">
                  Software engineer who loves exploring new technologies and
                  writing about it.
                </p>
              </div>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center pt-2 pb-6 space-x-2 text-md text-rose-500 mt-2"
            >
              <ArrowLeftIcon className="w-6 h-6" />
              <span>Read more articles</span>
            </Link>
          </div>
        </article>
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt(pruneLength: 100)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tag
        description
        slug
      }
    }
  }
`;
