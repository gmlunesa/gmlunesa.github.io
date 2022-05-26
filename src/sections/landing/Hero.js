import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import imgHero from "../../assets/images/landing/hero-img.png"
import imgHeroWave from "../../assets/images/landing/hero-wave.svg"
import imgHeroWaveShadow from "../../assets/images/landing/hero-wave-shadow.svg"

import imgShape1 from "../../assets/images/landing/hero-shape1.png"
import imgShape2 from "../../assets/images/landing/hero-shape2.png"
import imgShape3 from "../../assets/images/landing/hero-shape3.png"

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div
        className="hero-landing pt-29 pt-lg-32 pb-5 position-relative z-index-1"
        css={`
          background-image: linear-gradient(
            225deg,
            #cc3e3e 0%,
            #ff5f5f 39%,
            #ff9494 100%
          );
        `}
      >
        <div
          className="shape-1 gr-abs-tl z-index--1"
          data-aos="fade-down-right"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          <img src={imgShape1} alt="Shape as design" />
        </div>
        <div
          className="shape-2 gr-abs-tl z-index--1"
          data-aos="fade-down-right"
          data-aos-duration="800"
          data-aos-delay="800"
        >
          <img src={imgShape2} alt="Shape as design" />
        </div>
        <div
          className="shape-3 gr-abs-tl z-index--1"
          data-aos="fade-down-right"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <img src={imgShape3} alt="Shape as design" />
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <div className="hero-content dark-mode-texts mb-15 mb-lg-30 text-center text-md-start ">
                <h1 className="gr-text-2 mb-8 text-white pe-xl-4">
                  Hi, I’m Goldy Mariz Lunesa.
                </h1>
                <p className="gr-text-6 px-7 ps-md-0 pe-md-11 mb-0 gr-color-white-opacity-7">
                  Working as a{" "}
                  <span className="text-sky-blue">software engineer</span> with
                  a considerable experience in building robust and complex
                  applications
                </p>
                <div
                  className="hero-btn mt-11 "
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <a
                    href="mailto:gmlunesa@gmail.com"
                    className="btn btn-red rounded-8 gr-text-7 text-white gr-hover-y"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Inquire
                  </a>
                </div>
              </div>
            </Col>
            <div
              className="col-md-9 col-lg-5 col-xl-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <div className="hero-img position-relative">
                <img
                  src={imgHero}
                  alt="Profile with details about Goldy Mariz Lunesa"
                  className="w-100 position-relative gr-z-index-1"
                />
              </div>
            </div>
          </Row>
        </Container>
        <div className="wave-shape">
          <img
            src={imgHeroWave}
            alt="Wave design"
            className="w-100 light-shape default-shape"
          />
          <img src={imgHeroWaveShadow} alt="" className="w-100 dark-shape" />
        </div>
      </div>
    </>
  )
}

export default Hero
