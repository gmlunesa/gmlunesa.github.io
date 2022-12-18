import React from "react";

const Alert = ({ status }) => {
  return (
    <div className="flex mt-4 shadow gap-6 rounded-lg overflow-hidden divide-x max-w-2xl bg-white dark:bg-gray-800 dark:text-gray-100 divide-gray-700">
      <div
        className={`flex flex-1 flex-col p-3 border-l-8 ${
          status ? `border-green-600` : `border-red-600`
        }`}
      >
        <span className="text-xl">
          {status ? `Successfully sent!` : `Oops! There was an error.`}
        </span>
        <span className="text-xs text-gray-600 dark:text-gray-400">
          {status ? `Thank you for your message.` : `Please try again later.`}
        </span>
      </div>
    </div>
  );
};

export default Alert;
