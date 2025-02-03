import Events from "@/components/Events/Events";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";
export const metadata = {
  title: "Events",
  description: "",
};

const page = () => {
  return (
    <Layout>
      <PageHeader title='Events' />
      <Events />
    </Layout>
  );
};

export default page;
