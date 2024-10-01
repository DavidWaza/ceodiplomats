"use client";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import dynamic from "next/dynamic";
import sponsorData from "@/data/SponsorsData";
import Image from "next/image";
import { usePathname } from "next/navigation";
const TinySlider = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});
import bg from "@/assets/images/shapes/sponsor-bg-1-1.png";

const settings = {
  container: "#sponsor-carousel-1",
  loop: true,
  autoplay: true,
  items: 2,
  gutter: 30,
  mouseDrag: true,
  touch: true,
  nav: false,
  autoplayButtonOutput: false,
  controls: false,
  responsive: {
    0: {
      items: 2,
      gutter: 30,
    },
    576: {
      items: 3,
      gutter: 30,
    },
    768: {
      items: 4,
      gutter: 30,
    },
    992: {
      items: 5,
      gutter: 50,
    },
    1200: {
      items: 5,
      gutter: 140,
    },
  },
};

const Sponsors = ({ title }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <section
      className={`sec-pad-top sec-pad-bottom sponsor-carousel ${
        title === "homeTwo"
          ? "sponsor-carousel--home-2"
          : title === "homeThree"
          ? "sponsor-carousel--home-3"
          : ""
      }`}
      style={title === "homeThree" ? { backgroundImage: `url(${bg.src})` } : {}}
    >
      <Container>
        <TinySlider
          className='thm-tns__carousel'
          id='sponsor-carousel-1'
          settings={settings}
        >
          {sponsorData.map((sponsor) => (
            <div key={sponsor.id} className='item'>
              <Image src={sponsor.image} alt='' />
            </div>
          ))}
        </TinySlider>
      </Container>
    </section>
  );
};

export default Sponsors;
