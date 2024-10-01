import AboutOne from "@/components/AboutOne/AboutOne";
import CtaOne from "@/components/CtaOne/CtaOne";
import FunFactOne from "@/components/FunFactOne/FunFactOne";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import Sponsors from "@/components/Sponsors/Sponsors";
import TestimonialOne from "@/components/TestimonialOne/TestimonialOne";
import Volunteers from "@/components/Volunteers/Volunteers";
import React from "react";

export const metadata = {
  title: "About Page",
  description: "Non Profit Charity Nextjs Template",
};

const page = () => {
  return (
    <Layout>
      <PageHeader title='About Us' />
      <AboutOne />
      {/* <Sponsors /> */}
      <CtaOne page={true} />
      <FunFactOne />
      {/* <Volunteers /> */}
      <TestimonialOne page={true} />
    </Layout>
  );
};

export default page;
