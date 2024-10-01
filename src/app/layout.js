import "@/assets/paroti-icons/stylesheet.css";
import "@fontsource/manrope/latin.css";
import "bootstrap/dist/css/bootstrap.min.css";

// swiper css

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

// Tiny slider css

import "tiny-slider/dist/tiny-slider.css";

// vendor css
import "@/assets/vendors/animate/animate.min.css";
import "@/assets/vendors/fontawesome/css/all.min.css";

// animate css

import "animate.css/animate.min.css";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import "./globals.css";

// slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ThemeProvider from "@/Provider/ThemeProvider";

export const metadata = {
  title: "Home",
  description: "Diplomatic Conferences",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
