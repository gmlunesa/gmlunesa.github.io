import * as React from "react";
const CTA = () => {
  return (
    <div
      className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-violet-50 via-rose-200 to-gray-100
                dark:bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"
    >
      <div className="lg:flex lg:items-center lg:justify-around w-full mx-auto py-12 px-4 sm:px-6 lg:px-8 z-20">
        {/* <h2 className="text-2xl font-bold text-transparent rounded bg-clip-text caret-pink-600 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600 via-red-500 to-rose-200"> */}
        <h2 className="text-3xl font-bold text-black dark:text-white">
          <span className="block">
            Learn more about my{" "}
            <span className="underline decoration-rose-500/50 decoration-2">
              professional experience
            </span>
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
              className="py-4 px-6 mt-4 lg:mt-0 bg-rose-500 hover:bg-rose-400 dark:hover:bg-rose-600 focus:ring-rose-300 focus:ring-offset-rose-300 text-white w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
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
