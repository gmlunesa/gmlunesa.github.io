import * as React from "react";
import BlogLink from "../../components/BlogLink";
const { Link } = require("gatsby");

const BlogList = ({ edges }) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => <BlogLink key={edge.node.id} post={edge.node} />);

  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 bg-gray-100 text-gray-800 py-20">
      <div className="container grid grid-cols-1 mx-auto">
        <h1 className="text-3xl font-bold px-2">Digital garden</h1>
      </div>
      {Posts}
    </section>
  );
};

export default BlogList;
