"use client";
import React, { useState } from "react";
import about2_1 from "@/assets/images/shapes/about-2-1.png";
import community_development from "@/assets/images/resources/development.jpg";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Link from "next/link";

const AboutTwo = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <section className="sec-pad-top sec-pad-bottom about-two">
      <Image src={about2_1} className="about-two__shape-1 float-bob-x" alt="" />

      <Container>
        <Row className="gutter-y-60">
          <Col md={12} lg={6}>
            {" "}
            <div className="about-two__image">
              <div className="about-two__image__shape-1"></div>
              {/* /.about-two__image__shape-1    */}
              <div className="about-two__image__shape-2"></div>
              {/* /.about-two__image__shape-2    */}
              <div className="about-two__image__shape-3"></div>
              {/* /.about-two__image__shape-3    */}

              <Image
                src={community_development}
                className="img-h-auto"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
                alt=""
              />

              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <div className="about-two__image__caption">
                  <h3 className="about-two__image__caption__count count-box">
                    {counterOn && (
                      <CountUp
                        className="count-text"
                        end={200}
                        duration={1.5}
                      />
                    )}
                    +
                  </h3>
                  {/* /.about-two__image__caption__count count-box    */}
                  <p className="about-two__image__caption__text">Attendees</p>
                  {/* /.about-two__image__caption__text    */}
                </div>
              </ScrollTrigger>

              {/* /.about-two__image__caption    */}
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="about-two__content">
              <div className="sec-title">
                <p className="sec-title__tagline">Welcome to CEO Diplomats</p>
                <h2 className="sec-title__title">
                  Center for development advancements
                </h2>
              </div>

              <p className="about-two__text">
                At CEO DIPLOMATS we believe that diplomacy can be an effective
                tool for conflict resolution, economic development,
                environmental protection, human rights advocacy as well as other
                global concerns. Through our programs we provide training on
                international law & policy making; intercultural communication;
                mediation & negotiation skills; public speaking & presentation
                techniques; leadership development workshops etc.
              </p>
              <div className="about-two__btns">
                <Link href="about" className="thm-btn about-two__btn">
                  <span>Discover More</span>{" "}
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTwo;
