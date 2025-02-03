import EventDetailsPage from "@/components/EventsDetailsPage/EventDetailsPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

export const metadata = {
  title: "Event Details",
  description: "",
};

const page = () => {
  return (
    <Layout>
      <PageHeader title='Events Details' list='Events' />
      <EventDetailsPage />
    </Layout>
  );
};

export default page;
