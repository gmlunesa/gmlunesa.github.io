import React from "react"
import PageWrapper from "../components/PageWrapper"
import Seo from "../components/Seo/Seo"
import Hero from "../sections/landing/Hero"
import Languages from "../sections/landing/Languages"
import Projects from "../sections/landing/Projects"

const IndexPage = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          theme: "dark",
          align: "right",
          isFluid: true,
        }}
        footerConfig={{
          style: "style3", //style1, style2
        }}
      >
        <Seo title="Home" />
        <Hero />
        <Languages />
        <Projects />
      </PageWrapper>
    </>
  )
}
export default IndexPage
