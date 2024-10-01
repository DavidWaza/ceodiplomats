import AboutTwo from "@/components/AboutTwo/AboutTwo";
import ContactUs from "@/components/ContactUs/ContactUs";
import CtaOne from "@/components/CtaOne/CtaOne";
import Develop from "@/components/Develop/Develop";
import CampaignNumber from "@/components/CampaignNumber/CampaignNumber";
import Layout from "@/components/Layout/Layout";

import NewsLetterOne from "@/components/NewsLetterOne/NewsLetterOne";
import SliderOne from "@/components/SliderOne/SliderOne";
import Sponsors from "@/components/Sponsors/Sponsors";
import TestimonialOne from "@/components/TestimonialOne/TestimonialOne";

export default function Home() {
  return (
    <Layout>
      <main>
        <SliderOne />
        <AboutTwo />
        <Develop />
        <CtaOne />
        <TestimonialOne />
        <ContactUs />
        {/* <Sponsors /> */}
        <CampaignNumber />
        <NewsLetterOne />
      </main>
    </Layout>
  );
}
