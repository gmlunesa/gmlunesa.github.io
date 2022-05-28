import * as React from "react";
import { Link } from "gatsby";
const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-800 ">
      <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span className="block">Oops!</span>
          <span className="block text-rose-500">Page not found</span>
        </h2>
        <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
          Hi there! Thank you for visiting my site. The page that you are trying
          to access doesn't exist... yet.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <Link
              type="button"
              to="/"
              className="py-4 px-6  bg-rose-600 hover:bg-rose-700 focus:ring-rose-500 focus:ring-offset-rose-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
