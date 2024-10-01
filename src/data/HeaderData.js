import main_logo from "@/assets/images/logo-dark.png";
import logo_light from "@/assets/images/logo-light.png";

import {
  faTwitter,
  faFacebook,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMap,
  faMobile,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";

const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    subNavItems: [],
  },
  {
    id: 2,
    name: "About us",
    href: "/about",
    subNavItems: [],

  },
  {
    id: 3,
    name: "Our Speakers",
    href: "/#volunteer",
    subNavItems: [],

  },
  // {
  //   id: 4,
  //   name: "Donations",
  //   href: "/donations",
  //   subNavItems: [],
  // },

  {
    id: 5,
    name: "Events",
    href: "/#events",
    subNavItems: [
      { id: 1, name: "Events", href: "/events" },
      { id: 2, name: "Events Details", href: "/event-details" },
    ],
  },
  {
    id: 6,
    name: "Contact",
    href: "/#contact",
    subNavItems: [],
  },
];

const social = [
  { icon: faTwitter, link: "" },
  { icon: faFacebook, link: "" },
  { icon: faInstagram, link: "" },
];

const headerData = {
  icons: [
    {
      id: 1,
      icon: faMap,
      content: "88 broklyn golden street. New York",
      subHref: "",
    },
    {
      id: 2,
      icon: faEnvelopeOpen,
      content: "needhelp@company.com",
      subHref: "mailto",
    },
    {
      id: 3,
      icon: faMobile,
      content: "+ 1 (307) 776-0608",
      subHref: "tel",
    },
  ],
  navItems,
  social,
  main_logo,
  logo_light,
};

export default headerData;
