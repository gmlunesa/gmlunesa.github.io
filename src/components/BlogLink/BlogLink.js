import * as React from "react";
import {
  ArrowRightIcon,
  UserIcon,
  CalendarIcon,
} from "@heroicons/react/outline";

const { Link } = require("gatsby");

const BlogLink = ({ post }) => {
  return (
    <div className="dark:bg-gray-800 dark:text-gray-50 my-4 px-2">
      <div className="container grid grid-cols-12 mx-auto bg-gray-200 dark:bg-gray-900">
        <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-8">
          <div className="flex justify-start">
            <span className="px-2 py-1 text-xs rounded-full bg-rose-400 text-gray-50 dark:text-gray-900">
              {post.frontmatter.tag}
            </span>
          </div>
          <h1 className="text-2xl font-semibold">{post.frontmatter.title}</h1>
          <p className="flex-1 pt-2 italic text-gray-700 dark:text-gray-200">
            {post.excerpt}
          </p>
          <Link
            to={post.frontmatter.slug}
            className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm text-rose-600"
          >
            <span>Read more</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
          <div className="flex items-center justify-start pt-2">
            <div className="flex space-x-2 text-sm mr-2">
              <span className="self-center">
                <CalendarIcon className="w-4 h-4" />
              </span>
              <span className="self-center">{post.frontmatter.date}</span>
            </div>
            <div className="flex space-x-2 text-sm">
              <span className="self-center">
                <UserIcon className="w-4 h-4" />
              </span>
              <span className="self-center">Goldy Mariz Lunesa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLink;
