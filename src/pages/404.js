import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="notfound">
      <div className="container row">
        <div className="col-12 my-auto text-center">
          <h1>NOT FOUND</h1>
          <p>This page doesn't exist yet!</p>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
