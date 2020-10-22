import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBriefcase,
  faCalendar,
  faTerminal,
  faGraduationCap,
  faUserGraduate,
  faCode,
} from "@fortawesome/free-solid-svg-icons"

export default class Content extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query projectsQuery {
            allProjectsJson {
              edges {
                node {
                  project
                  link
                  description
                  language
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <section className="content" id="content">
              <div className="container">
                {/* Job subsection */}
                <div className="subsection">
                  <h1>
                    <span className="dot"></span>What do I{" "}
                    <span className="word">do</span>?
                  </h1>

                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <h5>NCR Corporation</h5>
                        <h6>
                          <FontAwesomeIcon
                            icon={faBriefcase}
                            className="mr-2"
                          />{" "}
                          Software Engineer
                        </h6>
                        <h6>
                          <FontAwesomeIcon icon={faCalendar} className="mr-2" />{" "}
                          Jul 2018 - Present
                        </h6>
                      </div>

                      <div className="card-text">
                        ◆ Wrote high quality source code using C++, C# and
                        Microsoft scripting and GUI tools to reprogram, update,
                        and add new features to complex NCR system applications.
                        <br />◆ Worked in a customer facing team, wherein
                        interpersonal and communication skills are also utilized
                        and refined.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="subsection">
                  {" "}
                  <h1 className="mt-5">
                    <span className="dot"></span>What do I{" "}
                    <span className="word">know</span>?
                  </h1>
                  <div className="row">
                    {/* First column */}
                    <div className="col-lg-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title">
                            <h5>Languages</h5>
                          </div>

                          <div className="card-text">
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              C
                            </div>
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              C++
                            </div>
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              C#
                            </div>
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              HTML
                            </div>
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Java
                            </div>
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Javascript
                            </div>
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Python
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title">
                            <h5>Workflows</h5>
                          </div>

                          <div className="card-text">
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Agile
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Second column */}
                    <div className="col-lg-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title">
                            <h5>Frameworks</h5>
                          </div>

                          <div className="card-text">
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Node
                            </div>

                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              React
                            </div>

                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              GatsbyJS
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-body">
                          <div className="card-title">
                            <h5>Technologies</h5>
                          </div>

                          <div className="card-text">
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Machine Learning
                            </div>

                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Artificial Intelligence
                            </div>

                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Robotic Process Automation
                            </div>

                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Web Development
                            </div>

                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Android Mobile Development
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="subsection">
                  <h1 className="mt-5">
                    <span className="dot"></span>What did I{" "}
                    <span className="word">study</span>?
                  </h1>

                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <h5>University of the Philippines Cebu</h5>
                        <h6>
                          <FontAwesomeIcon
                            icon={faGraduationCap}
                            className="mr-2"
                          />
                          Computer Science
                        </h6>
                        <h6>
                          <FontAwesomeIcon
                            icon={faUserGraduate}
                            className="mr-2"
                          />{" "}
                          Jun 2018
                        </h6>
                      </div>

                      <div className="card-text">
                        I earned my Bachelor's Degree in Computer Science in
                        University of the Philippines, with Cum Laude honors.
                        For my undergraduate thesis, I wrote a study called
                        Video Game Recommender System using Recurrent LSTM.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="subsection">
                  <h1 className="mt-5">
                    <span className="dot"></span>What have I{" "}
                    <span className="word">experimented with</span>?
                  </h1>
                  <div className="row">
                    {data.allProjectsJson.edges.map(({ node }, index) => (
                      <div className="col-lg-4" key={index}>
                        <div className="card mb-4">
                          <div className="card-body">
                            <div className="card-title">
                              <h5>{node.project}</h5>
                              <h6>
                                <FontAwesomeIcon
                                  icon={faCode}
                                  className="mr-2"
                                />
                                {node.language}
                              </h6>
                            </div>

                            <div className="card-text">{node.description}</div>
                          </div>
                          <div className="card-footer">
                            <a
                              href={node.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      />
    )
  }
}

// export default function Content() {
//   return (

//   )
// }
