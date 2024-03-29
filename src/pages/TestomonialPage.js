import React from "react";
import BackToTop from "../components/common/BackToTop";
import Booking from "../components/common/Booking";
import Footer from "../components/common/Footer";
import Header from "../components/common/Headers/Header";
import Navbar from "../components/common/Navbar";
import Testimonial from "../components/common/Testimonial";
import TopBar from "../components/common/TopBar";

const TestomonialPage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Header title="Testomonial" />
      <Booking />
      <Testimonial />
      <Footer />
      <BackToTop />
    </>
  );
};

export default TestomonialPage;
