import React from "react";
import { SparklesIcon, LinkIcon } from "@heroicons/react/outline";

const Activity = ({ action, date_accomplished, category, url }) => {
  return (
    <ol className="relative mx-6 border-l border-gray-400 dark:border-gray-700">
      <li className="mb-3 ml-6">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-rose-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-rose-900">
          <SparklesIcon className="w-3 h-3 text-rose-600 dark:text-rose-200" />
        </span>
        <h3 className="flex items-center mb-1 text-md font-serif font-semibold text-gray-900 dark:text-white">
          {action}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-rose-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:text-rose-200"
          >
            <LinkIcon className="mr-2 w-4 h-4" />
          </a>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {date_accomplished}
        </time>
      </li>
    </ol>
  );
};

export default Activity;
