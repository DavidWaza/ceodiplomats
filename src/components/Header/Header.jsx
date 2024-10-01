"use client";
import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

import { useRootContext } from "@/Provider/context";
import NavItems from "./NavItems";
import headerData from "@/data/HeaderData";
import Link from "next/link";
import useScroll from "@/hooks/uaeScroll";
import { usePathname } from "next/navigation";
const { navItems, main_logo } = headerData;

const Header = () => {
  const { handleToggle, toggleSearch } = useRootContext();
  const scrollTop = useScroll(130);

  const pathname = usePathname();

  return (
    <header className={"main-header"}>
      <nav
        className={
          scrollTop
            ? `sticky-header  main-menu sticky-header--cloned sticky-fixed slideInDown animated clearfix`
            : `sticky-header  main-menu slideIn animated clearfix`
        }
      >
        <div className="container-fluid">
          <Link href="/" className="main-header__logo">
            {/* <Image src={main_logo} width={127} height={49} alt="logo" /> */}
            CEO DIPLOMATS
          </Link>

          <ul className="main-menu__list">
            {navItems.map((navItem) => (
              <NavItems key={navItem.id} navItem={navItem} />
            ))}
          </ul>

          <div className="main-menu__right">
            <div className="main-menu__cta">
              <div className="main-menu__cta__icon">
                <i className="paroti-icon-volunteer"></i>
              </div>
              <div className="main-menu__cta__text">
                <span>Join us now</span>
                <Link href="contact">Become a Speaker</Link>
              </div>
            </div>
            <Link href="#" className="thm-btn thm-btn--two ">
              <span>become a speaker</span>
              <i>
                <FontAwesomeIcon
                  icon={faMicrophone}
                  style={{ width: "14px" }}
                />
              </i>
            </Link>
            <Link
              href="#"
              onClick={handleToggle}
              className="main-header__toggler mobile-nav__toggler"
            >
              <span></span>
              <span></span>
              <span></span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
