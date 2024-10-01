"use client";
import React, { useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MobileNav from "../MobileNav/MobileNav";
import ScrollTop from "../ScrollTop/ScrollTop";
import AOS from "aos";
import "aos/dist/aos.css";
import Search from "../Search/Search";

const Layout = ({ children, pageTitle }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Preloader />
      <div className="page-wrapper">
        <Header />
        {children}
        <Footer />
      </div>
      <ScrollTop />
      <MobileNav />
      <Search />
    </>
  );
};

export default Layout;
