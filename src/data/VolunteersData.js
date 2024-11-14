import cardImage1 from "@/assets/images/speakers/speaker-mich.jpg";
import cardImage2 from "@/assets/images/speakers/speaker-gad.jpg";
import cardImage3 from "@/assets/images/speakers/speaker-cole.jpg";
import cardImage4 from "@/assets/images/speakers/speaker-tosin.jpg";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const volunteersData = {
  tagLine: "Ready to help you",
  title: "Happy volunteers",
  volunteersDataCards: [
    {
      id: 1,
      title: "Sarah albert",
      designations: "Volunteers",
      socials: [
        { id: 1, icon: faTwitter },
        { id: 2, icon: faFacebook },
        { id: 3, icon: faPinterest },
        { id: 4, icon: faInstagram },
      ],
      image: cardImage1,
    },
    {
      id: 2,
      title: "Mike hardson",
      designations: "Volunteers",
      socials: [
        { id: 1, icon: faTwitter },
        { id: 2, icon: faFacebook },
        { id: 3, icon: faPinterest },
        { id: 4, icon: faInstagram },
      ],
      image: cardImage2,
    },
    {
      id: 3,
      title: "Aleesha brown",
      designations: "Volunteers",
      socials: [
        { id: 1, icon: faTwitter },
        { id: 2, icon: faFacebook },
        { id: 3, icon: faPinterest },
        { id: 4, icon: faInstagram },
      ],
      image: cardImage3,
    },
  ],
};
export default volunteersData;
