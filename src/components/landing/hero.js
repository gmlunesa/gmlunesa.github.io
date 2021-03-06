import React from "react"

import Image from "../image"

import { Link } from "react-scroll"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container h-100">
        <div className="row h-100 justify-content-around mb-5">
          <div className="col-lg-5 my-auto">
            <div className="hero-introduction">
              <h1>
                <span className="wave mr-2" role="img" aria-label="Hand wave">
                  👋
                </span>
                Hi, I'm
                <br />
                Goldy Mariz.
              </h1>
              <p>
                It's nice to meet you. I write code for a living, and I am
                currently open for collaborations!
              </p>
              <Link
                to="content"
                className="hero-button btn shadow-sm"
                smooth={true}
              >
                Get to know me
              </Link>
              {/* <div className="row justify-content-around mt-3">
                <div className="col-lg-6 my-auto">
                  <Link
                    to="content"
                    className="hero-button btn shadow-sm"
                    smooth={true}
                  >
                    Get to know me
                  </Link>
                </div>
                <div className="col-lg-6 my-auto">
                  <a
                    href="https://drive.google.com/file/d/19cmJzYvDxoLpc0IoV4ZkHYZlS7HMyBlU/view?usp=sharing"
                    className="hero-button--resume btn shadow-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get my resume&nbsp;
                  </a>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 my-auto">
            <div className="hero-bio">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="icon">
                    <Image
                      fileName="gmlunesa-pic.jpg"
                      style={{ width: "5rem", height: "5rem" }}
                      alt=""
                    />
                  </div>
                  <h3 className="card-title">@gmlunesa</h3>
                  <h4>
                    <span role="img" aria-label="pin">
                      📍
                    </span>{" "}
                    Cebu City <br />
                  </h4>
                  <p className="card-text">
                    software engineer. imaginary astronaut.
                  </p>
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">
                      <a
                        href="mailto:gmlunesa@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        alt="Email button"
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a
                        href="https://github.com/gmlunesa"
                        target="_blank"
                        rel="noreferrer"
                        alt="Github button"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a
                        href="https://linkedin.com/in/gmlunesa"
                        target="_blank"
                        rel="noreferrer"
                        alt="LinkedIn button"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a
                        href="https://twitter.com/gmlunesa"
                        target="_blank"
                        rel="noreferrer"
                        alt="Twitter button"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                  </ul>
                  {/* <a
                    href="https://twitter.com/gmlunesa"
                    className="follow-button btn btn-primary shadow-lg"
                    target="_blank"
                  >
                    Follow
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
