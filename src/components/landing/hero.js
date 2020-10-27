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
    <section className="hero" id="about">
      <div className="container h-100">
        <div className="row h-100 justify-content-around">
          <div className="col-lg-5 my-auto">
            <div className="hero-introduction">
              <h1>
                <span className="wave" role="img" aria-label="Hand wave">
                  👋
                </span>
              </h1>
              <h1>
                Hi. I'm
                <br />
                <span className="word">Goldy Mariz</span>.
              </h1>
              <p>
                It's nice to meet you. I write code for a living, and I am
                currently open for collaborations!
              </p>
              <Link
                to="content"
                className="hero-button btn btn-primary shadow-sm"
                smooth={true}
              >
                Get to know me
              </Link>
            </div>
          </div>
          <div className="col-lg-4 my-auto">
            <div className="hero-bio">
              <div className="card shadow-sm mb-5">
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
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a
                        href="https://github.com/gmlunesa"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a
                        href="https://linkedin.com/in/gmlunesa"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a
                        href="https://twitter.com/gmlunesa"
                        target="_blank"
                        rel="noreferrer"
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
