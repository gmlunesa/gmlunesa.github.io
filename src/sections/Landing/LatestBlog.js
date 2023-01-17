import React from "react";
import { Link } from "gatsby";
import { ArrowRightIcon } from "@heroicons/react/outline";

const LatestBlog = ({ post: { node } }) => {
  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return new Date(date).toLocaleDateString(undefined, options);
  };
  return (
    <section className="bg-white dark:bg-gray-800 py-20 px-4">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row dark:text-white justify-around">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="">
            <h2 className="group flex justify-center gap-1.5 sm:justify-start">
              <span className="relative mt-2 mr-1 flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75"></span>
                <span className="relative inline-flex h-4 w-4 rounded-full bg-fuchsia-500"></span>
              </span>
              <span className="text-3xl font-semibold">
                Read my latest blog article
              </span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Explore the collection of my digitized thoughts and musings, now
              accessible over the cyber web space. I write about technologies I
              am trying out, applications I am coding and releases I am looking
              forward to.
            </p>

            <Link
              to="/blog"
              className="inline-flex items-center pt-2 pb-6 space-x-2 text-md text-rose-500 mt-2"
            >
              <span>Browse articles</span>
              <ArrowRightIcon className="w-6 h-6" />
            </Link>
          </div>
          <Link to={node.slug} className="relative mt-10 lg:mt-0">
            <article className="rounded-xl bg-gradient-to-r from-purple-300 via-fuchsia-500 to-rose-600 p-0.5 shadow-xl transition hover:shadow-sm">
              <div className="rounded-[10px] bg-white dark:bg-gray-800 px-6 py-14">
                <time
                  dateTime={node.dateAdded}
                  className="block text-xs text-gray-600 dark:text-gray-400"
                >
                  {formatDate(node.dateAdded)}
                </time>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white ">
                  {node.title}
                </h3>

                {/* <div className="my-4 flex flex-wrap gap-1">
                  {node.frontmatter.tags.map((tag) => (
                    <span
                      className="whitespace-nowrap rounded-full bg-rose-100 text-rose-600 px-2.5 py-0.5 text-xs
                              dark:text-rose-100 dark:bg-rose-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}
              </div>
            </article>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
