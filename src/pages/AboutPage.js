import React from "react";
import About from "../components/common/About";
import Booking from "../components/common/Booking";
import Feature from "../components/common/Feature";
import Footer from "../components/common/Footer";
import Header from "../components/common/Headers/Header";
import Navbar from "../components/common/Navbar";
import Registration from "../components/common/Registration";
import Team from "../components/common/Team";
import TopBar from "../components/common/TopBar";

const AboutPage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Header title="about" />
      {/* <Booking /> */}
      <About />
      {/* <Feature /> */}
      <Registration />
      {/* <Team /> */}
      <Footer />
    </>
  );
};

export default AboutPage;
