import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Image from "../components/image"

import Typing from "react-typing-animation"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    {/* <Masthead /> */}
    <section className="about" id="top">
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
                  <h3>
                    Hi there!{" "}
                    <span role="img" aria-label="Happy face">
                      😊
                    </span>
                  </h3>
                  <h4>an introduction</h4>
                </div>

                <div className="card-text">
                  Hello, I'm <span className="text-highlight">Goldy Mariz</span>
                  . Thanks for coming by my website and for taking the time to
                  visit around. I'm a software engineer with almost 5 years
                  experience in developing applications. I love learning new
                  things and witnessing the technological advances in this
                  so-called "Fourth Industrial Revolution".
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 my-auto mx-auto">
            <Image
              fileName="ahagon.jpg"
              alt="Ahagon New Game"
              className="about-img-wrapper"
            />
          </div>
          <div className="col-lg-7">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h3>More about me</h3>
                  <h4>my professional experience</h4>
                </div>
                <div className="card-text">
                  In my experience as a software engineer, I have two main
                  roles: solve bugs and create new features. Which do I like
                  better? Well, both! Defect solution and functionality
                  implementations are challenging and fullfilling to do.
                  <br />
                  <br />
                  Going through Agile workflows in my past and current
                  employement, I have experienced multiple roles in a team.
                  Aside from being a standard dev, I have undergone being a team
                  leader, a business analyst and even a QA. One thing that I
                  discovered about myself through these occassional role
                  shifting is that, I have an inclination towards managing
                  resources, negotiating requirements and organizing
                  documentation. Perhaps that could be a track that I could
                  pursue in the future.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 my-auto mx-auto">
            <Image
              fileName="hal.jpg"
              alt="2001:Space Odyssey still"
              className="about-img-wrapper"
            />
          </div>
          <div className="col-lg-7">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h3>Beyond the work hours</h3>
                  <h4>can't take my eyes off the screen</h4>
                </div>
                <div className="card-text">
                  In my free time, I don't really do much. I like to relax
                  through browsing reddit or sleeping. Honestly, this section
                  could end here, I don't really do much; but that would be too
                  boring... and empty.
                  <br />
                  <br />
                  Seriously! When I am feeling motivated, I play around with
                  code and experiment with different languages and tech. Check
                  out my{" "}
                  <a
                    href="https://github.com/gmlunesa"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>{" "}
                  page for my past projects. This website could be counted as an
                  evidence for that! I recently discovered the JAMStack and its
                  benefits. I created this current GatsbyJS version amidst the
                  pandemic and quarantine affair, to see the advantages for
                  myself. Sure enough, Gatsby delivered! Get started with
                  GatsbyJS{" "}
                  <a
                    href="https://gatsbyjs.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 my-auto mx-auto">
            <Image
              fileName="rei.jpg"
              alt="Rei Ayanami fishing"
              className="about-img-wrapper"
            />
          </div>
          <div className="col-lg-7">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h3>Other things I love</h3>
                  <h4>just some recommendations</h4>
                </div>
                <div className="card-text">
                  I don't really have a{" "}
                  <strong>
                    <i>defined</i>
                  </strong>{" "}
                  taste in things. I basically just go with my current mood and
                  what I feel like watching, listening or reading. Nevertheless,
                  here are timeless favorites— no matter what mood or location,
                  I'm always down for them.
                  <br />
                  <br />
                  For movies, I love going back to Middle Earth and root for the
                  best hobbit in the world, Samwise Gamgee. One could never go
                  wrong with Lord of the Rings trilogy (extended verions
                  please). I truly adore the lore of the Middle Earth, and the
                  efforts that JRR Tolkien dedicated in the world building.
                  Although the movies are great adaptations, I still like going
                  back and reading The Lord of the Rings novels.
                  <br />
                  <br />
                  I am a sucker for the fantasy genre. My favorite literary work
                  is A Song of Ice and Fire by George RR Martin. I love how the
                  characters are written to reflect humanity in real life, with
                  grey morality in characters and complexities in politics. For
                  manga, I highly recommend Shingeki No Kyojin.
                  <br />
                  <br />
                  For music, the only album I could listen to on repeat forever
                  would be In the Aeroplane Over the Sea by Neutral Milk Hotel.
                  To be honest, I don't fully understand the whole album, but
                  it's an amazing auditory experience. A close runner up would
                  be the self titled album of GUNSHIP to accompany late night
                  existential thoughts.
                  <br />
                  <br />
                  Speaking of existential thoughts, I believe Neon Genesis
                  Evangelion delivers that with its exploration in human psyche
                  and emotions. It seems like a mecha early on, but I promise,
                  it is a beautiful melancholic slow burn. Like Breaking Bad!
                  Such a well-crafted show worth the patience and occasional fly
                  swatting attempts. Better Call Saul, its prequel spin-off
                  series, is also exceptional.
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 my-auto mx-auto">
            <Image
              fileName="dooku.jpg"
              alt="Count Dooku"
              className="about-img-wrapper"
            />
          </div>
          <div className="col-lg-7">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h3>
                    Did you ever hear the tragedy of Darth Plagueis The Wise?
                  </h3>
                  <h4>I thought not.</h4>
                </div>
                <div className="card-text">
                  It's not a story the Jedi would tell you. It's a Sith legend.
                  Darth Plagueis was a Dark Lord of the Sith, so powerful and so
                  wise he could use the Force to influence the midichlorians to
                  create life… He had such a knowledge of the dark side, he
                  could even keep the ones he cared about from dying.
                  <br />
                  <br />
                  The dark side of the Force is a pathway to many abilities some
                  consider to be unnatural. He became so powerful… the only
                  thing he was afraid of was losing his power, which eventually,
                  of course, he did. Unfortunately, he taught his apprentice
                  everything he knew, then his apprentice killed him in his
                  sleep. Ironic. He could save others from death, but not
                  himself.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutPage
