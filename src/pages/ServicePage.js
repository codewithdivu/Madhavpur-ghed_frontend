import React from "react";
import BackToTop from "../components/common/BackToTop";
import Booking from "../components/common/Booking";
import Footer from "../components/common/Footer";
import HeaderService from "../components/common/Headers/HeaderService";
import Navbar from "../components/common/Navbar";
import Service from "../components/common/Service";
import Testimonial from "../components/common/Testimonial";
import TopBar from "../components/common/TopBar";

const ServicePage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeaderService />
      <Booking />
      <Service />
      <Testimonial />
      <Footer />
      <BackToTop />
    </>
  );
};

export default ServicePage;
