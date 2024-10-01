import image1 from "@/assets/images/blog/blog-1-1.jpg";
import image2 from "@/assets/images/blog/blog-1-2.jpg";
import image3 from "@/assets/images/blog/blog-1-3.jpg";
import image4 from "@/assets/images/blog/blog-1-4.jpg";
import image5 from "@/assets/images/blog/blog-1-5.jpg";
import image6 from "@/assets/images/blog/blog-1-6.jpg";
import {
  faAngleDoubleRight,
  faComments,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const blogData = {
  tagLine: "Watch our latest blogs",
  title: "Latest news & articles",
  carouselData: [
    {
      id: 1,
      image: image1,
      date: { day: "28", month: "Oct" },
      lists: [
        { id: 1, icon: faUser, cont: "by Admin" },
        { id: 2, icon: faComments, cont: "02 comments" },
      ],
      title: "Online legal advice for asylum seekers in Greece",
      link: "blog-details",
      linkIcon: faAngleDoubleRight,
      linkText: "Read More",
    },
    {
      id: 2,
      image: image2,
      date: { day: "28", month: "Oct" },
      lists: [
        { id: 1, icon: faUser, cont: "by Admin" },
        { id: 2, icon: faComments, cont: "02 comments" },
      ],
      title: "Online legal advice for asylum seekers in Greece",
      link: "blog-details",
      linkIcon: faAngleDoubleRight,
      linkText: "Read More",
    },
    {
      id: 3,
      image: image3,
      date: { day: "28", month: "Oct" },
      lists: [
        { id: 1, icon: faUser, cont: "by Admin" },
        { id: 2, icon: faComments, cont: "02 comments" },
      ],
      title: "Online legal advice for asylum seekers in Greece",
      link: "blog-details",
      linkIcon: faAngleDoubleRight,
      linkText: "Read More",
    },
    {
      id: 4,
      image: image4,
      date: { day: "28", month: "Oct" },
      lists: [
        { id: 1, icon: faUser, cont: "by Admin" },
        { id: 2, icon: faComments, cont: "02 comments" },
      ],
      title: "Online legal advice for asylum seekers in Greece",
      link: "blog-details",
      linkIcon: faAngleDoubleRight,
      linkText: "Read More",
    },
    {
      id: 5,
      image: image5,
      date: { day: "28", month: "Oct" },
      lists: [
        { id: 1, icon: faUser, cont: "by Admin" },
        { id: 2, icon: faComments, cont: "02 comments" },
      ],
      title: "Online legal advice for asylum seekers in Greece",
      link: "blog-details",
      linkIcon: faAngleDoubleRight,
      linkText: "Read More",
    },
    {
      id: 6,
      image: image6,
      date: { day: "28", month: "Oct" },
      lists: [
        { id: 1, icon: faUser, cont: "by Admin" },
        { id: 2, icon: faComments, cont: "02 comments" },
      ],
      title: "Online legal advice for asylum seekers in Greece",
      link: "blog-details",
      linkIcon: faAngleDoubleRight,
      linkText: "Read More",
    },
  ],
};
export default blogData;
