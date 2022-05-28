import * as React from "react";

// Components
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Hero from "../sections/landing/Hero";
import About from "../sections/Landing/About";
import Cta from "../sections/Landing/CTA";
import Projects from "../sections/landing/Projects";

const IndexPage = () => (
  <>
    <Layout>
      <Seo title="Home" />
      <Hero />
      <About />
      <Cta />
      <Projects />
    </Layout>
  </>
);

export default IndexPage;
