import image1 from "@/assets/images/blog/blog-2-1.jpg";
import image2 from "@/assets/images/blog/blog-2-2.jpg";

import author1 from "@/assets/images/blog/blog-a-2-1.png";
import author2 from "@/assets/images/blog/blog-a-2-2.png";
import blogImage from "@/assets/images/shapes/blog-h2-s-1.png";
import {
  faAngleDoubleRight,
  faComments,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const blogTwoData = {
  blogImage,
  tagLine: "Watch our latest blogs",
  title: "Latest news & articles",
  blogData: [
    {
      id: 1,
      image: image1,
      author: author1,
      date: { day: "28", month: "Oct" },
      lists: [
        { id: 1, icon: faUser, cont: "Post by Admin" },
        { id: 2, icon: faComments, cont: "02 comments" },
      ],
      title: "Online legal advice for asylum seekers in Greece",
      link: "blog-details",
      text: "I wanted to take a minute to thank you and your team. I have grown ....",
      linkIcon: faAngleDoubleRight,
      linkText: "Read More",
    },
    {
      id: 2,
      image: image2,
      author: author2,
      date: { day: "28", month: "Oct" },
      lists: [
        { id: 1, icon: faUser, cont: "Post by Admin" },
        { id: 2, icon: faComments, cont: "02 comments" },
      ],
      title: "Online legal advice for asylum seekers in Greece",
      text: "I wanted to take a minute to thank you and your team. I have grown ....",
      link: "blog-details",
      linkIcon: faAngleDoubleRight,
      linkText: "Read More",
    },
  ],
};
export default blogTwoData;
