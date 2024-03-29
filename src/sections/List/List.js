import * as React from "react";
import BlogLink from "../../components/BlogLink";
import ProjectLink from "../../components/ProjectLink";

const List = ({ edges, isBlog }) => {
  let Posts = [];
  if (isBlog) {
    Posts = edges.map((edge) => (
      <BlogLink key={edge.node.id} post={edge.node} />
    ));
  } else {
    Posts = edges
      .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
      .map((edge) => <ProjectLink key={edge.node.id} post={edge.node} />);
  }

  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 bg-gray-100 text-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-bold text-3xl">
            {isBlog
              ? `Virtual garden of Goldy Mariz`
              : `Projects of Goldy Mariz`}
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            {isBlog
              ? `A collection of my digitized thoughts and musings, now accessible
            over the cyber web space.`
              : `A collection of my personal projects, as I keep up with new releases and innovations.`}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Posts}
        </div>
      </div>
    </section>
  );
};

export default List;
