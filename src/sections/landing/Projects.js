import React, { useRef } from "react"
import styled from "styled-components"
import Slider from "react-slick"
import { Container, Row, Col } from "react-bootstrap"
import { GoCode, GoChevronLeft, GoChevronRight } from "react-icons/go"

import { projectItems } from "../../data/projectItems"

const SliderStyled = styled(Slider)`
  .slick-slide div {
    &:focus {
      outline: none !important;
    }
  }
`

const Projects = () => {
  const elSlider = useRef()

  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    className: "single-slide",

    responsive: [
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <>
      {/* <!-- Projects section --> */}
      <div className="projects-section bg-default-4 pt-13 pt-lg-24 pb-2 pb-lg-22">
        <Container>
          <Row className="justify-content-lg-between align-items-center pb-9 pb-sm-0">
            <Col sm="8" md="6" lg="6" xl="5">
              <div className="section-name mb-9 mb-sm-13 mb-lg-21">
                <h2 className="name gr-text-4 mb-6 heading-color">
                  Featured projects
                </h2>
                <p className="gr-text-8 text-color-opacity">
                  Here are some of the projects that I have created in my free
                  time.
                </p>
              </div>
            </Col>
            <Col sm="4" md="6" lg="4" xl="3">
              <div className="projects-slider-arrows ms-auto">
                <button
                  className="slick-arrow gr-hover-text-red"
                  aria-label="Previous"
                  type="button"
                  onClick={() => {
                    elSlider.current.slickPrev()
                  }}
                >
                  <GoChevronLeft />
                </button>
                <button
                  className="slick-arrow gr-hover-text-red"
                  aria-label="Next"
                  type="button"
                  onClick={() => {
                    elSlider.current.slickNext()
                  }}
                >
                  <GoChevronRight />
                </button>
              </div>
            </Col>
          </Row>
          <div
            className="projects-slider"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <SliderStyled ref={elSlider} {...slickSettings}>
              {projectItems.map(
                ({ link = "/#", name, type, description, tech }, index) => (
                  <div key={index}>
                    <a
                      href={link}
                      className="feature-widget focus-reset bg-white d-flex flex-column min-height-px-297 border rounded-10 pt-8 pb-8 ps-7 mx-6 ps-lg-9 pe-md-8 pe-lg-10 gr-hover-shadow-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="mb-auto">
                        <h5 className="gr-text-12 pb-1 text-yellow-orange text-uppercase">
                          {type}
                        </h5>
                        <h3 className="gr-text-7 text-blackish-blue">{name}</h3>
                        <p className="gr-text-11 gr-color-blackish-blue-opacity-7 mb-0">
                          {description}
                        </p>
                      </div>
                      <div className="d-flex">
                        <div className="pe-5 text-blue">
                          <GoCode />
                        </div>
                        <div className="gr-color-blackish-blue-opacity-6">
                          {tech}
                        </div>
                      </div>
                    </a>
                  </div>
                )
              )}
            </SliderStyled>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Projects
