import * as React from "react";

import {
  UserGroupIcon,
  OfficeBuildingIcon,
  QrcodeIcon,
  SparklesIcon,
} from "@heroicons/react/outline";

const experiences = [
  {
    name: "As a team member",
    description:
      "With my experience in Agile, Scrum and traditional types of project teams, I rapidly adjust to the various dynamics in a team.",
    icon: UserGroupIcon,
  },
  {
    name: "As a company employee",
    description:
      "With my employment history in both corporate and startup companies, I am adaptable to different types of culture. ",
    icon: OfficeBuildingIcon,
  },
  {
    name: "As a developer",
    description:
      "With my accomplishments in feature writing and bug fixing tasks, I maintain a balance of self-sufficiency and effective communication.",
    icon: QrcodeIcon,
  },
  {
    name: "As a hobbyist",
    description:
      "With the ever-evolving technological frameworks, I make sure to constantly update my knowledge and skills through theory and application.",
    icon: SparklesIcon,
  },
];

const About = () => {
  return (
    <section className="dark:bg-gray-700 dark:text-gray-100 bg-gray-100 text-gray-800">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            {/* <h2 className="text-base text-rose-600 font-semibold tracking-wide uppercase">
              Developer
            </h2> */}
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              My experience throughout the years
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
              I started coding at 15. Everyday has been a learning opportunity
              since then.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {experiences.map((experience) => (
                <div key={experience.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-tr from-purple-400 via-rose-400 to-rose-500 text-white">
                      <experience.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      {experience.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                    {experience.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
