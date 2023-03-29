import React from "react";
import About from "../components/common/About";
import BackToTop from "../components/common/BackToTop";
import Blog from "../components/common/Blog";
import Booking from "../components/common/Booking";
import Contact from "../components/common/Contact";
import Corousel from "../components/common/Corousel";
import Destination from "../components/common/Destination";
import Feature from "../components/common/Feature";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Packages from "../components/common/Packages";
import Registration from "../components/common/Registration";
import Service from "../components/common/Service";
import Team from "../components/common/Team";
import Testimonial from "../components/common/Testimonial";
import TopBar from "../components/common/TopBar";

const Home = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Corousel />
      <About />
      {/* <Feature /> */}
      <Destination />
      <Service />
      {/* <Packages /> */}
      <Registration />
      {/* <Contact /> */}
      {/* <Team /> */}
      {/* <Testimonial /> */}
      {/* <Blog /> */}
      <Footer />
      <BackToTop />
    </>
  );
};

export default Home;
