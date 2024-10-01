import ContactInfo from "@/components/ContactInfo/ContactInfo";
import ContactOne from "@/components/ContactOne/ContactOne";
import GoogleMap from "@/components/GoogleMap/GoogleMap";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";
export const metadata = {
  title: "Contact || Paroti || Non Profit Charity Nextjs Template",
  description: "Non Profit Charity Nextjs Template",
};
const page = () => {
  return (
    <Layout>
      <PageHeader title='Contact us' list='Contact' />
      <ContactInfo />
      <ContactOne />
      <GoogleMap />
    </Layout>
  );
};

export default page;
