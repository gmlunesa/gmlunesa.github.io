import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogLink = ({ post }) => {
  const image = getImage(post.coverImage);

  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return new Date(date).toLocaleDateString(undefined, options);
  };
  return (
    <a
      href={`https://blog.gmlunesa.com/${post.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block overflow-hidden rounded-xl border bg-gray-50 shadow-sm transition duration-200 ease-in-out hover:shadow-md
                      dark:bg-gray-900 dark:border-gray-700"
    >
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-purple-200 via-fuchsia-400 to-rose-500"></span>
      <GatsbyImage
        alt={`Cover for ${post.title} blog post by Goldy Mariz Lunesa`}
        image={image}
        className="h-56 w-full object-cover"
      />

      <div className="p-4 sm:p-6">
        <time
          datetime={post.dateAdded}
          className="block text-xs text-gray-600 dark:text-gray-400"
        >
          {formatDate(post.dateAdded)}
        </time>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white ">
          {post.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3">
          {post.brief}
        </p>

        {/* <div className="my-4 flex flex-wrap gap-1">
          {post.frontmatter.tags.map((tag) => (
            <span
              className="whitespace-nowrap rounded-full bg-rose-100 text-rose-600 px-2.5 py-0.5 text-xs
                              dark:text-rose-100 dark:bg-rose-800"
            >
              {tag}
            </span>
          ))}
        </div> */}
      </div>
    </a>
  );
};

export default BlogLink;
