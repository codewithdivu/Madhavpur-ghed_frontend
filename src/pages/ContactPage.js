import React from "react";
import BackToTop from "../components/common/BackToTop";
import Booking from "../components/common/Booking";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import TopBar from "../components/common/TopBar";
import Contact from "../components/common/Contact";
import Header from "../components/common/Headers/Header";

const ContactPage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Header title="Contact" />
      <Booking />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
};

export default ContactPage;
