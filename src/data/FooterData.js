import logo from "@/assets/images/logo-light.png";
import footerBg from "@/assets/images/backgrounds/footer-bg-1-1.jpg";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const social = [
  { icon: "fa-twitter", link: "" },
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-pinterest-p", link: "" },
  { icon: "fa-instagram", link: "" },
];

const footerData = {
  footerBg,
  logo,
  about: "Number 12 Lumumbashi wuse zone 4, Abuja Nigeria.",

  social,
  year: new Date().getFullYear(),
  author: "Tevily",

  icons: [
    {
      id: 1,
      icon: faTwitter,
      href: "#",
    },
    {
      id: 2,
      icon: faFacebook,
      href: "#",
    },
    {
      id: 4,
      icon: faInstagram,
      href: "#",
    },
  ],
  links: [
    { id: 2, link: "/about", title: "About us" },
    { id: 3, link: "/speaker", title: "Our Speakers" },
    { id: 4, link: "/event", title: "Events" },
    { id: 5, link: "/contact", title: "Contacts" },
  ],
 
  contacts: [
    {
      id: 1,
      icon: faEnvelope,
      title: "ceodiplomats@yahoo.com",
      subHref: "mailto",
    },
    { id: 2, icon: faMobile, title: "+234 (0) 9018660095", subHref: "tel" },
  ],
};

export default footerData;
