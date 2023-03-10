import React from "react";
import BackToTop from "../components/common/BackToTop";
import Booking from "../components/common/Booking";
import Destination from "../components/common/Destination";
import Footer from "../components/common/Footer";
import HeaderDestination from "../components/common/Headers/HeaderDestination";
import Navbar from "../components/common/Navbar";
import TopBar from "../components/common/TopBar";

const DestinationPage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeaderDestination />
      <Booking />
      <Destination />
      <Footer />
      <BackToTop />
    </>
  );
};

export default DestinationPage;
