import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Image from "../components/image"

import Typing from "react-typing-animation"

import { graphql } from "gatsby"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    {/* <Masthead /> */}
    <section className="about">
      <div className="container">
        <div className="row mt-4 justify-content-center">
          <div className="col-lg-6 col-sm-12 my-auto headline">
            <h1>If I wasn't a software engineer, I'd like to be...</h1>
            <Typing loop cursorClassName={"cursor"}>
              <h2>
                An astronaut!
                <Typing.Backspace count={20} delay={1000} />
                <Typing.Delay ms={200} />
                An astronomer.
                <Typing.Backspace count={20} delay={1000} />
                <Typing.Delay ms={200} />
                A meteorologist.
                <Typing.Backspace count={20} delay={1000} />
                <Typing.Delay ms={200} />
                A volcanologist.
                <Typing.Backspace count={20} delay={1000} />
                <Typing.Delay ms={200} />
                A math teacher.
                <Typing.Backspace count={20} delay={1000} />
                <Typing.Delay ms={200} />
                <Typing.Cursor />
              </h2>
            </Typing>
          </div>
        </div>
        <div className="row my-4 justify-content-center">
          <div className="col-lg-7 my-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="card-title">
                  <h5>
                    Hi there!{" "}
                    <span role="img" aria-label="Happy face">
                      😊
                    </span>
                  </h5>
                  <h6>an introduction</h6>
                </div>

                <div className="card-text">
                  Hello, I'm <span className="text-highlight">Goldy Mariz</span>
                  . Thanks for coming by my website and for taking the time to
                  visit around. I think I'll make this page as my autobiography
                  that no one is asking for. It's frankly a miracle you're still
                  reading. Are you a stalker? Are you bored out of your mind?
                  Are you a data mining bot deployed by the{" "}
                  <s>reptilian overlord</s> Mark Zuckerberg?
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 my-auto mx-auto">
            <Image fileName="hal.jpg" alt="" className="about-img-wrapper" />
          </div>
          <div className="col-lg-7">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h5>More about me</h5>
                  <h6>My taste is all over the place</h6>
                </div>
                <div className="card-text">
                  I suppose this is the part where I describe myself. I solve
                  bugs and write new software features for my job at{" "}
                  <a href="https://ncr.com" target="_blank" rel="noreferrer">
                    NCR Corporation
                  </a>
                  . I am generally a backend developer, although occassionally
                  (by force or by free will), I deal with frontend elements.
                  Just like right now! I built this website from scratch, from
                  design, development, to deployment. This is actually the first
                  time I have GatsbyJS, and it has been a breeze despite the
                  learning curve. Awesome documentation, blazing fast
                  experience, what more could you want! (This is not sponsored I
                  just really like it)
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 my-auto mx-auto">
            <Image fileName="ahagon.jpg" alt="" className="about-img-wrapper" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "images/rei.jpg" }) {
      ...squareImage
    }
    image2: file(relativePath: { eq: "images/hal.jpg" }) {
      ...squareImage
    }
  }
`
export default AboutPage
