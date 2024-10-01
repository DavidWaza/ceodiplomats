import aboutOneData from "@/data/AboutOne";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutOne = () => {
  const {
    aboutOne,
    aboutTwo,
    aboutTagline,
    desig,
    items,
    metaImage,
    name,
    shape1,
    shape2,
    tagLine,
    text,
    title,
  } = aboutOneData;
  return (
    <section className="sec-pad-top sec-pad-bottom about-one">
      <div className="about-one__shape-1 float-bob-y">
        <Image src={shape1} alt="" />
      </div>
      <div className="about-one__shape-2 float-bob-x">
        <Image src={shape2} alt="" />
      </div>
      <Container>
        <Row>
          <Col lg={6}>
            <div
              className="about-one__images "
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <Image src={aboutOne} alt="" width={0} height={0} />
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-one__content">
              <div className="sec-title">
                <p className="sec-title__tagline">{tagLine}</p>
                <h2 className="sec-title__title">{title}</h2>
              </div>
              <div className="about-one__tagline">{aboutTagline}</div>
              <p className="about-one__text">{text}</p>
              <div className="about-one__meta clearfix">
                <h3 className="about-one__name">{name}</h3>

                <p className="about-one__designation">{desig}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutOne;
