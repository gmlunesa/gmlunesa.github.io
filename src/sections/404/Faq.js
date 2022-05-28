import * as React from "react";
const Faq = () => {
  return (
    <section className="bg-rose-50 dark:bg-gray-700 py-20 px-4">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row dark:text-white">
        <h2 className="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
          Frequently-asked questions
        </h2>
        <dl className="w-full md:w-2/3">
          <dt className="mb-4">
            <h3 className="text-xl font-semibold">
              What did you use to build this website?
            </h3>
          </dt>
          <dd className="mb-16">
            <p>
              The current version of this website is built with the static site
              generator Gatsby, styled with Tailwind and hosted on Github Pages.
            </p>
          </dd>
          <dt className="mb-4">
            <h3 className="text-xl font-semibold">
              What are you currently learning at the moment?
            </h3>
          </dt>
          <dd className="mb-16">
            <p>
              I am currently learning Data Science and Machine Learning with
              Python! If you check my Github profile, you may see repositories
              of me playing with machine learning.
            </p>
          </dd>
          <dt className="mb-4">
            <h3 className="text-xl font-semibold">
              What skills do you wish to improve on?
            </h3>
          </dt>
          <dd className="mb-16">
            <p>
              I would like to improve on my frontend design skills! I have
              enrolled in a couple of courses that cover topics regarding web
              design and UI/UX.
            </p>
          </dd>
        </dl>
      </div>
    </section>
  );
};

export default Faq;
