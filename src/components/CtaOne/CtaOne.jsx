'use cient'
import React from "react";
import ctaS from "@/assets/images/shapes/cta-s-1-1.png";
import ctaBg from "@/assets/images/backgrounds/bg-1.jpg";
import Link from "next/link";
import JarallaxImage from "../Jarallax/JarallaxImage";
import dynamic from "next/dynamic";
import { Container } from "react-bootstrap";
const Jarallax = dynamic(() => import("@/components/Jarallax/Jarallax"), {
  ssr: false,
});

const CtaOne = ({ page }) => {

  return (
    <section className={`sec-pad-top ${page ? "cta-one--pad-bottom " : "sec-pad-bottom"} cta-one`}>
      <Jarallax className="cta-one__bg" speed={0.2} imgPosition="center cnter">
        <JarallaxImage src={ctaBg.src} />
      </Jarallax>

      <div
        className='cta-one__shape'
        style={{ backgroundImage: `url(${ctaS.src})` }}
      ></div>

      <Container className='text-center'>
        <div className='sec-title'>
          <p className='sec-title__tagline'>
            We are here to develop world class diplomats
          </p>

          <h2 className='sec-title__title'>
            How do we achieve this feat?
          </h2>
        </div>

        <Link className='thm-btn cta-one__btn' href='donations'>
          <span>Know more</span>
        </Link>
      </Container>
    </section>
  );
};

export default CtaOne;
