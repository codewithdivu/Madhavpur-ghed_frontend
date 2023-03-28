import React from "react";
import BackToTop from "../components/common/BackToTop";
import Booking from "../components/common/Booking";
import Footer from "../components/common/Footer";
import Header from "../components/common/Headers/Header";
import Navbar from "../components/common/Navbar";
import Team from "../components/common/Team";
import TopBar from "../components/common/TopBar";

const TravelGuidePage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Header title="Guide" />
      <Booking />
      <Team />
      <Footer />
      <BackToTop />
    </>
  );
};

export default TravelGuidePage;
