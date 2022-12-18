import * as React from "react";

import ProjectsData from "../../data/ProjectsData";

const Projects = () => {
  return (
    <section className="py-6 dark:bg-gray-700 dark:text-gray-100 bg-gray-100 text-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-bold text-4xl">Featured Projects</h2>

          {/* <p className="mt-4 text-gray-600 dark:text-gray-400">
            Caption
          </p> */}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ProjectsData.map((project) => {
            return (
              <a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block overflow-hidden rounded-xl border bg-gray-50 shadow-sm transition duration-200 ease-in-out hover:shadow-md
                      dark:bg-gray-900 dark:border-gray-700"
              >
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-purple-200 via-fuchsia-400 to-rose-500"></span>

                <div className="p-4 sm:p-6">
                  {/* <time
                    datetime={post.frontmatter.dateOriginal}
                    className="block text-xs text-gray-600 dark:text-gray-400"
                  >
                    {post.frontmatter.date}
                  </time> */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white ">
                    {project.name}
                  </h3>
                  <span
                    className="whitespace-nowrap rounded-full bg-rose-100 text-rose-600 px-2.5 py-0.5 text-xs
                              dark:text-rose-100 dark:bg-rose-800 "
                  >
                    {project.tech}
                  </span>
                  <p className="my-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3">
                    {project.description}
                  </p>

                  {/* <div className="my-4 flex flex-wrap gap-1">
                    {post.frontmatter.tags.map((tag) => (
                      <span
                        className="whitespace-nowrap rounded-full bg-rose-100 text-rose-600 px-2.5 py-0.5 text-xs
                              dark:text-rose-100 dark:bg-rose-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div> */}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
