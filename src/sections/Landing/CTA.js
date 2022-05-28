import * as React from "react";
const CTA = () => {
  return (
    <div className="bg-rose-500 dark:bg-gray-800">
      <div className="lg:flex lg:items-center lg:justify-around w-full mx-auto py-6 px-4 sm:px-6 lg:px-8 z-20">
        <h2 className="text-2xl font-bold text-white dark:text-white">
          <span className="block">
            Learn more about my professional experience
          </span>
        </h2>
        <a
          href="https://linkedin.com/in/gmlunesa"
          className="mt-3 lg:mt-0 lg:flex-shrink-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className=" inline-flex rounded-md shadow">
            <button
              type="button"
              className="py-4 px-6 sm:mt-2 bg-rose-400 dark:bg-rose-500 hover:bg-rose-300 dark:hover:bg-rose-600 focus:ring-rose-300 focus:ring-offset-rose-300 text-white w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Go to LinkedIn
            </button>
          </div>
        </a>
      </div>
    </div>
  );
};
export default CTA;
