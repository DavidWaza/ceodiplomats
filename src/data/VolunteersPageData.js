import cardImage1 from "@/assets/images/speakers/speaker-mich.jpg";
import cardImage2 from "@/assets/images/speakers/speaker-gad.jpg";
import cardImage3 from "@/assets/images/speakers/speaker-cole.jpg";
import cardImage4 from "@/assets/images/speakers/speaker-tosin.jpg";

import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const volunteersPageData = {
  tagLine: "Ready to help you",
  title: "Happy volunteers",
  volunteersDataCards: [
    {
      id: 1,
      title: "Michael Jerome",
      designations: "Speaker",
      socials: [
        { id: 1, icon: faTwitter },
        { id: 2, icon: faFacebook },
        { id: 4, icon: faInstagram },
      ],
      image: cardImage1,
    },
    {
      id: 2,
      title: "David Waza",
      designations: "Speaker",
      socials: [
        { id: 1, icon: faTwitter },
        { id: 2, icon: faFacebook },
        { id: 4, icon: faInstagram },
      ],
      image: cardImage2,
    },
    {
      id: 3,
      title: "Tosin Lee",
      designations: "Speaker",
      socials: [
        { id: 1, icon: faTwitter },
        { id: 2, icon: faFacebook },
        { id: 4, icon: faInstagram },
      ],
      image: cardImage3,
    },
    {
      id: 4,
      title: "Gad Jacobs",
      designations: "Speaker",
      socials: [
        { id: 1, icon: faTwitter },
        { id: 2, icon: faFacebook },
        { id: 4, icon: faInstagram },
      ],
      image: cardImage4,
    },
  ],
};
export default volunteersPageData;
