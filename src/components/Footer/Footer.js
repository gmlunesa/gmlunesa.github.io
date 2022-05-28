import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { FiMail, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Link to="/" className="flex items-center">
            <StaticImage
              src="../../images/gmlunesa-logo.svg"
              className="mr-3 h-8"
              loading="eager"
              width={30}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="gmlunesa logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              gmlunesa
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Quick Links
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link to="/blog" className="hover:text-rose-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-rose-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Follow
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a
                  href="https://github.com/gmlunesa"
                  className="hover:text-rose-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/gmlunesa"
                  className="hover:text-rose-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          {/* <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="flex text-sm text-gray-500  justify-center sm:text-center dark:text-gray-300">
          © {new Date().getFullYear()}
          &nbsp;
          <Link to="/" className="hover:text-rose-600">
            gmlunesa
          </Link>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 justify-center sm:mt-0">
          <a
            href="mailto:gmlunesa@gmail.com"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMail />
          </a>
          <a
            href="https://github.com/gmlunesa"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </a>
          <a
            href="https://linked.com/in/gmlunesa"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://twitter.com/gmlunesa"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
