"use client";
import galleryThreeData from "@/data/GalleryThreeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Modal from "../GalleryOne/Modal";
const TinySlider = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});
const settings = {
  lazyload: true,
  nav: false,
  gutter: 0,
  autoplay: true,
  autoplayTimeout: 6000,
  loop: true,
  autoplayHoverPause: true,
  mouseDrag: true,
  touch: true,
  autoplayButton: false,
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
    992: {
      items: 3,
      gutter: 30,
    },
    1200: {
      items: 5,
      gutter: 30,
    },
  },
};

const GalleryOneThree = () => {
  const [mounted, setMounted] = useState(false);
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.image);
  };

  const handelRotationRight = () => {
    const totalLength = galleryThreeData.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = galleryThreeData[0].image;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = galleryThreeData.filter((item) => {
      return galleryThreeData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].image;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = galleryThreeData.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = galleryThreeData[totalLength - 1].image;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = galleryThreeData.filter((item) => {
      return galleryThreeData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].image;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <section className='gallery-one gallery-one--home-3'>
      <Container fluid>
        <TinySlider className='gallery-one__carousel' settings={settings}>
          {galleryThreeData.map((galleryOne, index) => (
            <div key={galleryOne.id} className='item'>
              <div className='gallery-card'>
                <div className='gallery-card__image'>
                  <Image className='img-h-auto' src={galleryOne.image} alt='' />
                </div>

                <div className='gallery-card__content'>
                  <a className='img-popup'>
                    <i>
                      <FontAwesomeIcon
                        icon={galleryOne.icon}
                        onClick={() => handleClick(galleryOne, index)}
                      />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </TinySlider>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
            currentIndex={currentIndex}
            length={galleryThreeData.length}
          />
        )}
      </Container>
    </section>
  );
};

export default GalleryOneThree;
