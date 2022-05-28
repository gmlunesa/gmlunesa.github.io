import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  AcademicCapIcon,
  LocationMarkerIcon,
  AtSymbolIcon,
  TerminalIcon,
} from "@heroicons/react/outline";
const Hero = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-20 lg:flex-row lg:justify-around">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Hello, I’m Goldy Mariz.
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Working as a{" "}
            <span className="text-rose-600">software engineer</span>{" "}
            <br className="hidden md:inline lg:hidden" />
            with considerable experience in building robust and complex
            applications
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-6 rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-3">
            {/* Start */}
            <div className="flex flex-col">
              <div className="flex flex-row mb-3">
                <div className="shadow select-none cursor-pointer bg-white bg-rose-500 rounded-md flex flex-1 items-center justify-start p-4">
                  <div className="flex flex-col w-10 h-10 items-center mr-4">
                    <a href="/" className="block relative">
                      <StaticImage
                        alt="gmlunesa profile"
                        src="../../images/landing/gmlunesa.jpg"
                        loading="eager"
                        className="mx-auto object-cover rounded-full h-10 w-10 "
                      />
                    </a>
                  </div>
                  <div className="flex-1 pl-1 md:mr-12">
                    <div className="text-xl font-medium text-white mb-1">
                      @gmlunesa
                    </div>
                    <div className=" text-gray-100 text-sm">
                      Full Stack Developer
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-row mb-3">
                <div className="py-3 pl-2 flex items-center rounded-md bg-gray-100 dark:bg-gray-700">
                  <AcademicCapIcon
                    className="flex-shrink-0 h-6 w-6 text-rose-600"
                    aria-hidden="true"
                  />
                  <span className="ml-2 pr-2 text-base  text-gray-900 dark:text-white">
                    B.S. in Computer Science
                  </span>
                </div>
              </div>
              <div className="flex-row mb-3">
                <div className="py-3 pl-2 flex items-center rounded-md bg-gray-100 dark:bg-gray-700">
                  <LocationMarkerIcon
                    className="flex-shrink-0 h-6 w-6 text-rose-600"
                    aria-hidden="true"
                  />
                  <span className="ml-2 text-base  text-gray-900 dark:text-white">
                    Cebu City, Philippines
                  </span>
                </div>
              </div>
              <div className="flex-row mb-3">
                <div className="py-3 pl-2 flex items-center rounded-md bg-gray-100 dark:bg-gray-700">
                  <AtSymbolIcon
                    className="flex-shrink-0 h-6 w-6 text-rose-600"
                    aria-hidden="true"
                  />
                  <span className="ml-2 text-base  text-gray-900 dark:text-white">
                    gmlunesa@gmail.com
                  </span>
                </div>
              </div>
              <div className="py-3 pl-2 flex-wrap items-start justify-start rounded-md bg-gray-100 dark:bg-gray-700">
                <div className="flex flex-row mb-2">
                  <TerminalIcon
                    className="flex-shrink-0 h-6 w-6 text-rose-600"
                    aria-hidden="true"
                  />
                  <p className="flex flex-col mx-1 px-2 rounded-sm bg-gray-200 dark:bg-gray-600 ">
                    .Net
                  </p>
                  <p className="flex flex-col mx-1 px-2 rounded-sm bg-gray-200 dark:bg-gray-600">
                    Node.js
                  </p>
                  <p className="flex flex-col mx-1 px-2 rounded-sm bg-gray-200 dark:bg-gray-600">
                    React
                  </p>
                </div>
                <div className="flex flex-row mb-2">
                  <TerminalIcon
                    className="flex-shrink-0 h-6 w-6 text-transparent"
                    aria-hidden="true"
                  />
                  <p className="flex flex-col mx-1 px-2 rounded-sm bg-gray-200 dark:bg-gray-600 ">
                    Python
                  </p>
                  <p className="flex flex-col mx-1 px-2 rounded-sm bg-gray-200 dark:bg-gray-600 ">
                    Data Science
                  </p>
                </div>
                <div className="flex flex-row">
                  <TerminalIcon
                    className="flex-shrink-0 h-6 w-6 text-transparent"
                    aria-hidden="true"
                  />
                  <p className="flex flex-col mx-1 px-2 rounded-sm bg-gray-200 dark:bg-gray-600 ">
                    AI
                  </p>
                  <p className="flex flex-col mx-1 px-2 rounded-sm bg-gray-200 dark:bg-gray-600 ">
                    Docker
                  </p>
                  <p className="flex flex-col mx-1 px-2 rounded-sm bg-gray-200 dark:bg-gray-600 ">
                    Azure
                  </p>
                </div>
              </div>
            </div>
            {/* End */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
