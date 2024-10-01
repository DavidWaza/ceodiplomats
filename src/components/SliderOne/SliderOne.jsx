"use client";
import dynamic from "next/dynamic";
const TinySlider = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});
// import { Swiper, SwiperSlide } from "swiper/react";

// import "./SliderOne.css";

// import required modules
// import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Fragment, useEffect, useState } from "react";
import mainSliderData from "@/data/MainSliderData";
import { Container } from "react-bootstrap";
import Link from "next/link";

const SliderOne = () => {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
 
  const settings = {
    lazyload: true,
    mode: "gallery",
    animateIn: "fadeIn",
    animateOut: "slideOutDown",
    animateDelay: 5000,
    autoplayDirection: "backward",
    slideBy: "page",
    nav: true,
    mouseDrag: true,
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 7000,
    autoHeight: true,
    controls: true,
    controlsContainer: ".slider-one .tns-controls",
    container: "#verticle",
    axis: "verticle",
    gutter: 0,
    autoplayButton: false,
    autoplayButtonOutput: false,
    onInit: (current) => setCurrentSlide(current),
    onIndexChanged: (current) => setCurrentSlide(current),
  };

  return (
    <section className='slider-one position-relative overflow-hidden'>
      <div className='tns-controls'>
        <button className='tns-prev'>
          <span className='paroti-icon-left-arrow'></span>
        </button>
        <button className='tns-next'>
          <span className='paroti-icon-right-arrow'></span>
        </button>
      </div>
      <TinySlider settings={settings}>
        {mainSliderData.map(({ id, title, text, bg }) => (
          <div key={id} className='item'>
            <div className='slider-one__item'>
              <div
                className='slider-one__image'
                style={{
                  backgroundImage: `url(${bg.src})`,
                }}
              ></div>
              <Container>
                <h2
                  className='slider-one__title'
                  dangerouslySetInnerHTML={{ __html: title }}
                ></h2>
                <p className='slider-one__text'>{text}</p>
                <div className='slider-one__btns'>
                  <Link href='about' className='thm-btn slider-one__btn'>
                    <span>Discover More</span>
                  </Link>
                </div>
              </Container>
            </div>
          </div>
        ))}
      </TinySlider>
    </section>
  );
};

export default SliderOne;
