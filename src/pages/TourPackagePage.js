import React from "react";
import BackToTop from "../components/common/BackToTop";
import Booking from "../components/common/Booking";
import Destination from "../components/common/Destination";
import Footer from "../components/common/Footer";
import HeaderPackage from "../components/common/Headers/HeaderPackage";
import Navbar from "../components/common/Navbar";
import Packages from "../components/common/Packages";
import TopBar from "../components/common/TopBar";

const TourPackagePage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeaderPackage />
      <Booking />
      <Packages />
      <Destination />
      <Footer />
      <BackToTop />
    </>
  );
};

export default TourPackagePage;
