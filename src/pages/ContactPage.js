import React from "react";
import BackToTop from "../components/common/BackToTop";
import Booking from "../components/common/Booking";
import Footer from "../components/common/Footer";
import HeaderContact from "../components/common/Headers/HeaderContact";
import Navbar from "../components/common/Navbar";
import TopBar from "../components/common/TopBar";
import Contact from "../components/common/Contact";

const ContactPage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeaderContact />
      <Booking />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
};

export default ContactPage;
