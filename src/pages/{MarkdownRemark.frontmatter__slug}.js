import { graphql, Link } from "gatsby";
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi";
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
        customImage={
          frontmatter.featuredImage && frontmatter.featuredImage.publicURL
        }
      />
      <section className="dark:bg-gray-800 dark:text-gray-100 bg-gray-100 text-gray-800 py-10">
        <article className="max-w-4xl px-6 py-10 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
          <div className="w-full mx-auto space-y-4 text-center">
            {frontmatter.tags.map((tag) => (
              <span
                className="whitespace-nowrap rounded-full bg-rose-100 text-rose-600 px-2.5 py-0.5 text-s mx-2
                              dark:text-rose-100 dark:bg-rose-800"
              >
                {tag}
              </span>
            ))}

            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              {frontmatter.title}
            </h1>
            <p className="text dark:text-gray-400">
              <Link to="/" className="text-rose-500 dark:text-rose-400">
                <span itemprop="name">Goldy Mariz Lunesa</span>
              </Link>
              &nbsp;◇&nbsp;
              <time datetime={frontmatter.dateOriginal}>
                {frontmatter.date}
              </time>
            </p>
          </div>
          <article className="prose prose-slate prose-a:text-rose-500 prose-a:no-underline prose-img:rounded-md md:prose-lg dark:prose-invert prose-code:before:content-none prose-code:after:content-none">
            <div
              className="post-body"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center gap-4 rounded-lg bg-rose-500 p-6 shadow-lg sm:flex-row sm:justify-between">
                <strong className="text-xl text-center text-white lg:text-left">
                  Liked this article? Share now!
                </strong>
                <div className="flex gap-2">
                  <a
                    className="inline-flex items-center rounded-full border-2 border-white bg-white p-2 text-rose-600 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
                    href={`https://twitter.com/intent/tweet?text=Just read this article from @gmlunesa. Check it out at https://gmlunesa.com${frontmatter.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiTwitter />
                  </a>
                  <a
                    className="inline-flex items-center rounded-full border-2 border-white bg-white p-2 text-rose-600 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://gmlunesa.com${frontmatter.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiFacebook />
                  </a>
                  <a
                    className="inline-flex items-center rounded-full border-2 border-white bg-white p-2 text-rose-600 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=https://gmlunesa.com${frontmatter.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </article>

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
        dateOriginal: date
        title
        tag
        tags
        description
        slug
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
`;
