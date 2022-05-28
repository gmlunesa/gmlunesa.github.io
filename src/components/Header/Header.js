import * as React from "react";
import { Fragment } from "react";
import { Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";

import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  NewspaperIcon,
  AnnotationIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <Popover className="relative bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 dark:border-gray-900 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Gmlunesa</span>
              <StaticImage
                src="../../images/gmlunesa-logo.svg"
                loading="eager"
                width={30}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="gmlunesa logo"
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          {/* <Popover.Group as="nav" className="hidden md:flex space-x-10 "> */}
          <Popover.Group
            as="nav"
            className="hidden md:flex space-x-10 justify-end md:flex-1 lg:w-0"
          >
            <Link
              to="/blog"
              className="text-base font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-base font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Contact
            </Link>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-800 divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <StaticImage
                    src="../../images/gmlunesa-logo.svg"
                    className="h-8 w-auto"
                    loading="eager"
                    width={30}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="gmlunesa logo"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white  dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    to="/blog"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <NewspaperIcon
                      className="flex-shrink-0 h-6 w-6 text-rose-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900 dark:text-white">
                      Blog
                    </span>
                  </Link>
                  <Link
                    to="/contact"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <AnnotationIcon
                      className="flex-shrink-0 h-6 w-6 text-rose-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900 dark:text-white">
                      Contact
                    </span>
                  </Link>
                </nav>
              </div>
              <div>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Want more content?{" "}
                  <Link to="/" className="text-rose-600 hover:text-rose-500">
                    Sign up for my newsletter
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
