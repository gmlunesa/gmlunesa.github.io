import * as React from "react";
import BlogLink from "../../components/BlogLink";

const BlogList = ({ edges }) => {
  const Posts = edges
    .filter((edge) => !!edge.node.dateAdded) // You can filter your posts based on some criteria
    .map((edge) => <BlogLink key={edge.node._id} post={edge.node} />);

  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 bg-gray-100 text-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-bold text-3xl">Virtual garden of Goldy Mariz</h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            A collection of my digitized thoughts and musings, now accessible
            over the cyber web space.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Posts}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
