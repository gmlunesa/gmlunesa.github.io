import { graphql, Link } from "gatsby";
import * as React from "react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function ProjectTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;
  const image = getImage(frontmatter.featuredImage);
  return (
    <Layout>
      <Seo
        title={`${frontmatter.title} | Goldy Mariz Lunesa`}
        description={frontmatter.description}
        slug={frontmatter.slug}
        customImage={
          frontmatter.featuredImage && frontmatter.featuredImage.publicURL
        }
      />
      <div className="dark:bg-gray-800 dark:text-gray-100 bg-gray-100 text-gray-800 py-10">
        <article className="max-w-4xl px-6 py-10 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
          <GatsbyImage
            alt={`Cover for ${frontmatter.title} project by Goldy Mariz Lunesa`}
            image={image}
            className="rounded-xl w-full object-cover"
          />

          <div className="w-full mx-auto space-y-4 text-center">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              {frontmatter.title}
            </h1>

            <ul className="flex flex-wrap items-center justify-center mb-6 text-gray-600 dark:text-gray-400">
              {frontmatter.tags?.map((tag) => (
                <li key={tag} className="border-r-2 ml-2 pr-2 hover:underline">
                  {tag}
                </li>
              ))}
              <li className="ml-2 hover:underline md:mr-6">
                <time dateTime={frontmatter.dateOriginal}>
                  {frontmatter.date}
                </time>
              </li>
            </ul>
            <div className="flex space-x-4 justify-center">
              <a
                href={frontmatter.links ? frontmatter.links[0] : ""}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-rose-100 text-rose-600 px-4 py-2 text-s mx-2
                              dark:text-rose-100 dark:bg-rose-800"
              >
                View Source Code
              </a>
              <a
                href={frontmatter.links ? frontmatter.links[1] : ""}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-rose-600 text-rose-100 px-4 py-2 text-s mx-2
                              dark:text-rose-800 dark:bg-rose-100"
              >
                Visit Site
              </a>
            </div>
          </div>
          <div className="prose prose-slate prose-a:underline prose-a:decoration-rose-500 hover:prose-a:text-rose-500 hover:prose-a:no-underline  prose-img:rounded-lg md:prose-lg dark:prose-invert prose-code:before:content-none prose-code:after:content-none">
            <div
              className="post-body"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center gap-4 rounded-lg bg-gradient-to-r from-rose-400 via-rose-500 to-fuchsia-500 p-6 shadow-lg sm:flex-row sm:justify-between">
                <strong className="text-xl text-center text-white lg:text-left">
                  Liked this project? Share now!
                </strong>
                <div className="flex gap-2">
                  <a
                    className="inline-flex items-center rounded-full border-2 border-white bg-white p-2 text-rose-600 hover:bg-rose-50 hover:border-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
                    href={`https://twitter.com/intent/tweet?text=Just read about ${frontmatter.title} by @gmlunesa. Check it out at https://gmlunesa.com${frontmatter.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiTwitter />
                  </a>
                  <a
                    className="inline-flex items-center rounded-full border-2 border-white bg-white p-2 text-rose-600 hover:bg-rose-50 hover:border-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://gmlunesa.com${frontmatter.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiFacebook />
                  </a>
                  <a
                    className="inline-flex items-center rounded-full border-2 border-white bg-white p-2 text-rose-600 hover:bg-rose-50 hover:border-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=https://gmlunesa.com${frontmatter.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t dark:border-gray-700">
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
              <StaticImage
                alt="Image for @gmlunesa card"
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
              to="/projects"
              className="inline-flex items-center pt-2 pb-6 space-x-2 text-md text-rose-500 mt-2"
            >
              <ArrowLeftIcon className="w-6 h-6" />
              <span>Browse more projects</span>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt(pruneLength: 100)
      frontmatter {
        date(formatString: "YYYY")
        dateOriginal: date
        title
        tag
        tags
        links
        description
        slug
        featuredImage {
          publicURL
          childImageSharp {
            gatsbyImageData(
              width: 900
              height: 473
              layout: CONSTRAINED
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
    }
  }
`;
