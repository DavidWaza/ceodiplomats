"use client";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import ScrollToTop from "react-scroll-to-top";

const ScrollTop = () => {
  return (
    <ScrollToTop
      smooth
      component={
        <i>
          <FontAwesomeIcon icon={faAngleUp} />
        </i>
      }
    />
  );
};

export default ScrollTop;
