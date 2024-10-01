"use client";

import logo_light from "@/assets/images/logo-light.png";
import Link from "next/link";
import Image from "next/image";
import { useRootContext } from "@/Provider/context";
import headerData from "@/data/HeaderData";
import MobileNavItems from "./MobileNavItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const { social, logo, navItems } = headerData;

const MobileNav = () => {
  const { isExpanded, handleToggle } = useRootContext();
  return (
    <div className={`mobile-nav__wrapper ${isExpanded ? "expanded" : ""}`}>
      <div
        onClick={handleToggle}
        className='mobile-nav__overlay mobile-nav__toggler'
      ></div>
      <div className='mobile-nav__content'>
        <a
          href='#'
          onClick={handleToggle}
          className='mobile-nav__close mobile-nav__toggler'
        >
          <span></span>
          <span></span>
        </a>

        <div className='logo-box'>
          {/* <Link href='/'>
            <Image width={127} height={49} src={logo_light} alt='Paroti' />
          </Link> */}
          <h1>CEO DIPLOMATS</h1>
        </div>

        <div className='mobile-nav__container'>
          <ul className='mobile-menu__list'>
            {navItems.map((navItem) => (
              <MobileNavItems key={navItem.id} navItem={navItem} />
            ))}
          </ul>
        </div>

        <ul className='mobile-nav__contact list-unstyled'>
          <li>
            <FontAwesomeIcon icon={faPhone} />
            <a href='tel:+8898006802'>+234 (0) 9018660095</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href='mailto:needhelp@company.com'>ceodiplomats@yahoo.com</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            Number 12 Lumumbashi wuse zone 4, Abuja Nigeria.
          </li>
        </ul>
        <ul className='mobile-nav__social'>
          {social.map(({ icon, link }, index) => (
            <li key={index}>
              <Link href={link}>
                <FontAwesomeIcon icon={icon} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
