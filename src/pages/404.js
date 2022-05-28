import * as React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Hero from "../sections/404/Hero";
import Faq from "../sections/404/Faq";

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404" />
      <Hero />
      <Faq />
    </Layout>
  );
};

export default NotFoundPage;
