import React from "react";
import { UsersIcon, CodeIcon, StarIcon } from "@heroicons/react/outline";
import Form from "../../components/Form";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-800 py-20 px-4">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row dark:text-white">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="lg:col-start-2 md:pl-20">
            <h2 className="text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white sm:leading-9">
              Contact me for...
            </h2>
            <ul className="mt-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-gradient-to-tr from-purple-400 via-rose-400 to-rose-500 rounded-md">
                      <UsersIcon className="flex-shrink-0 h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                      Project collaborations
                    </h5>
                    <p className="mt-1 text-base leading-6 text-gray-500 dark:text-gray-300">
                      Work on exciting concepts
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-gradient-to-tr from-purple-400 via-rose-400 to-rose-500 rounded-md">
                      <CodeIcon className="flex-shrink-0 h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                      Code troubleshooting
                    </h5>
                    <p className="mt-1 text-base leading-6 text-gray-500 dark:text-gray-300">
                      Investigate issues regarding my open-source projects
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-gradient-to-tr from-purple-400 via-rose-400 to-rose-500 rounded-md">
                      <StarIcon className="flex-shrink-0 h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                      Career opportunities
                    </h5>
                    <p className="mt-1 text-base leading-6 text-gray-500 dark:text-gray-300">
                      See if I'll be a great addition to your team!
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
