import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiZap } from "react-icons/fi"

const Footer = () => {
  return (
    <>
      <div className="footer-section pt-17 pt-lg-21">
        <Container>
          <div className="copyright-area border-top py-9">
            <Row className="align-items-center">
              <Col lg="6">
                <p className="copyright-text gr-text-11 text-color-opacity mb-6 mb-lg-0 gr-text-color text-center text-lg-start">
                  © {new Date().getFullYear()} <FiZap /> gmlunesa
                </p>
              </Col>
              <Col lg="6" className="text-center text-lg-end">
                <ul className="social-icons list-unstyled mb-0">
                  <li className="ms-7">
                    <a
                      href="mailto:gmlunesa@gmail.com"
                      className="gr-text-color gr-hover-text-red"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiMail />
                    </a>
                  </li>
                  <li className="ms-7">
                    <a
                      href="https://github.com/gmlunesa"
                      className="gr-text-color gr-hover-text-red"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub />
                    </a>
                  </li>
                  <li className="ms-7">
                    <a
                      href="https://linkedin.com/in/gmlunesa"
                      className="gr-text-color gr-hover-text-red"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiLinkedin />
                    </a>
                  </li>
                  <li className="ms-7">
                    <a
                      href="https://twitter.com/gmlunesa"
                      className="gr-text-color gr-hover-text-red"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiTwitter />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer
