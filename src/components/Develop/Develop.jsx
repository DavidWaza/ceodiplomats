"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleDonationTwo from "./SingleDonationTwo";
import developData from "@/data/Develop";
const TinySlider = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});

const settings = {
  items: 1,
  gutter: 0,
  loop: false,
  nav: false,
  autoplay: false,
  mouseDrag: true,
  touch: false,
  autoplayButtonOutput: false,
  controls: false,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
      gutter: 30,
    },
  },
};
const Develop = () => {
  const { tagLine, text, title, carouselData } = developData;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <section className='sec-pad-top sec-pad-bottom donation-two'>
      <Container>
        <Row className='gutter-y-60'>
          <Col md={12} lg={4}>
            <div className='sec-title'>
              <p className='sec-title__tagline'>{tagLine}</p>

              <h2 className='sec-title__title'>{title}</h2>
            </div>

            <p className='donation-two__text'>{text}</p>
          </Col>
          <Col md={12} lg={6}>
            <div className='donation-two__carousel'>
              <TinySlider settings={settings}>
                {carouselData.map((carousel) => (
                  <SingleDonationTwo key={carousel.id} carousel={carousel} />
                ))}
              </TinySlider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Develop;
