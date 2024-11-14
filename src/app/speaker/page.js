import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import Volunteers from "@/components/Speakers/Speakers";
import React from "react";
export const metadata = {
  title: "Speakers",
  description: "",
};

const page = () => {
  return (
    <Layout>
      <PageHeader title="Speakers" />
      <Volunteers page={true} />
    </Layout>
  );
};

export default page;
