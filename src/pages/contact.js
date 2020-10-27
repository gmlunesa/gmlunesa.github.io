import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import ContactForm from "../components/contactform"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    {/* <Masthead /> */}
    <section className="contact">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-8">
            <h1>Projects++</h1>
            <p>
              Hey there! Do you want to code and collaborate? Or do you have any
              questions or comments? Send me a message! You can also reach me
              through the following links:
            </p>
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item">
                <a href="mailto:gmlunesa@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
              <li className="list-group-item">
                <a href="https://github.com/gmlunesa">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li className="list-group-item">
                <a href="https://linkedin.com/in/gmlunesa">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li className="list-group-item">
                <a href="https://twitter.com/gmlunesa">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  </Layout>
)

export default ContactPage