import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import Volunteers from "@/components/Volunteers/Volunteers";
import React from "react";
export const metadata = {
  title: "Volunteers || Paroti || Non Profit Charity Nextjs Template",
  description: "Non Profit Charity Nextjs Template",
};

const page = () => {
  return (
    <Layout>
      <PageHeader title='Volunteers' />
      <Volunteers page={true} />
    </Layout>
  );
};

export default page;
