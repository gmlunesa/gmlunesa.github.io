import React from "react"
import { Container, Row, Col } from "react-bootstrap"

// import iconF1 from "../../assets/image/svg/feature8-icon1.svg"
// import iconF2 from "../../assets/image/svg/feature8-icon2.svg"
// import iconF3 from "../../assets/image/svg/feature8-icon3.svg"
import { DiDotnet, DiNodejs, DiReact, DiPython } from "react-icons/di"

const Languages = () => {
  return (
    <>
      {/* <!-- Languages Area --> */}
      <div className="feature-section pt-14 pt-lg-21 pb-7 border-bottom bg-default-6">
        <Container>
          <Row className="justify-content-center">
            <Col xl="6" lg="6" md="8">
              <div className="section-title text-center mb-13 mb-lg-21">
                <h2 className="title gr-text-4 mb-6 heading-color">
                  Technologies
                </h2>
                <p className="gr-text-9 mb-0 text-color-opacity">
                  I love experimenting with different frameworks, whether it's
                  building a concept project or creating a fun app. Everyday is
                  an opportunity to learn new things.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col
              lg="3"
              md="4"
              className="mb-11 mb-lg-19 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="feature-widget text-center">
                <div className="widget-icon square-80 rounded-15 gr-text-4 mx-auto mb-9 bg-yellow-orange shadow-blue text-white">
                  <DiDotnet />
                </div>
                <div className="widget-text">
                  <h3 className="title heading-color gr-text-6 mb-7">.NET</h3>
                  {/* <p className="gr-text-11 text-color-opacity mb-0">
                    Description
                  </p> */}
                </div>
              </div>
            </Col>
            <Col
              lg="3"
              md="4"
              className="mb-11 mb-lg-19 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="feature-widget text-center">
                <div className="widget-icon square-80 rounded-15 gr-text-3 mx-auto mb-9 bg-yellow-orange shadow-blue text-white">
                  <DiNodejs />
                </div>
                <div className="widget-text">
                  <h3 className="title heading-color gr-text-6 mb-7">NodeJS</h3>
                  {/* <p className="gr-text-11 text-color-opacity mb-0">
                    Description
                  </p> */}
                </div>
              </div>
            </Col>
            <Col
              lg="3"
              md="4"
              className="mb-11 mb-lg-19 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="feature-widget text-center">
                <div className="widget-icon square-80 rounded-15 gr-text-4 mx-auto mb-9 bg-yellow-orange shadow-blue text-white">
                  <DiReact />
                </div>
                <div className="widget-text">
                  <h3 className="title heading-color gr-text-6 mb-7">React</h3>
                  {/* <p className="gr-text-11 text-color-opacity mb-0">
                    Description
                  </p> */}
                </div>
              </div>
            </Col>
            <Col
              lg="3"
              md="4"
              className="mb-11 mb-lg-19 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="feature-widget text-center">
                <div className="widget-icon square-80 rounded-15 gr-text-4 mx-auto mb-9 bg-yellow-orange shadow-blue text-white">
                  <DiPython />
                </div>
                <div className="widget-text">
                  <h3 className="title heading-color gr-text-6 mb-7">Python</h3>
                  {/* <p className="gr-text-11 text-color-opacity mb-0">
                    Description
                  </p> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Languages
