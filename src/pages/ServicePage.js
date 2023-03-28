import React from "react";
import BackToTop from "../components/common/BackToTop";
import Booking from "../components/common/Booking";
import Footer from "../components/common/Footer";
import Header from "../components/common/Headers/Header";
import Navbar from "../components/common/Navbar";
import Service from "../components/common/Service";
import Testimonial from "../components/common/Testimonial";
import TopBar from "../components/common/TopBar";

const ServicePage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Header title="Service" />
      <Booking />
      <Service />
      <Testimonial />
      <Footer />
      <BackToTop />
    </>
  );
};

export default ServicePage;
