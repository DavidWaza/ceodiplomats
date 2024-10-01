import bg from "@/assets/images/backgrounds/bg-1.jpg";
import testi1 from "@/assets/images/resources/testi-2-1.png";
import testi2 from "@/assets/images/resources/testi-2-2.png";
import testi3 from "@/assets/images/resources/testi-2-3.png";
import testi4 from "@/assets/images/resources/testi-2-4.png";
import testi5 from "@/assets/images/resources/testi-2-5.png";
import itemBg1 from "@/assets/images/shapes/testimonials-item-bg-1-1.png";
import cardImage1 from "@/assets/images/resources/testimonial-face.jpg";
const testimonialOneData = {
  bg,
  testi1,
  testi2,
  testi3,
  testi4,
  testi5,
  title: "What they’re \n talking about us",
  tagLine: "Our feedbacks",
  text: "Proin a lacus arcu. Nullam id dui eu orci maximus. \n Cras at auctor lectus, pretium tellus.",
  carouselData: [
    {
      id: 1,
      icon: "paroti-icon-quote testimonials-card__icon",
      text: "Attending the diplomatic conference was a truly enriching experience. The speakers were not only well-versed in global affairs, but they also shared actionable insights that can drive meaningful change. The panel discussions on sustainable development and international collaboration were particularly enlightening.",
      name: "Michael Jerome",
      desig: "International Relations Expert",
      itemImage: itemBg1,
      cardImage: cardImage1,
    },
    {
      id: 2,
      icon: "paroti-icon-quote testimonials-card__icon",
      text: "What truly impressed me about this conference was the organization and the caliber of discussions. Every session felt thoughtfully curated, covering pressing diplomatic issues with depth and balance. The moderators kept the conversations engaging and inclusive, making sure all perspectives were heard. It was a privilege to participate",
      name: "Dr. Emily Sanusi",
      desig: "Diplomats",
      itemImage: itemBg1,
      cardImage: cardImage1,
    },
    {
      id: 3,
      icon: "paroti-icon-quote testimonials-card__icon",
      text: "The diplomatic conference exceeded all expectations, especially in terms of networking opportunities. Meeting key diplomats, policy makers, and thought leaders from around the world in one venue was invaluable. The informal sessions provided a perfect space to connect and discuss future partnerships, fostering relationships that will impact global policy",
      name: "Sarah Tosin",
      desig: "Ambassador",
      itemImage: itemBg1,
      cardImage: cardImage1,
    },
  ],
};
export default testimonialOneData;
