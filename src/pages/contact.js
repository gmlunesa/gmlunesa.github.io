import * as React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Hero from "../sections/Contact/Hero";
import Faq from "../sections/404/Faq";

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <Hero />
      <Faq />
    </Layout>
  );
};

export default Contact;
