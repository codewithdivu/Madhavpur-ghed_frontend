import React from "react";
import About from "../components/common/About";
import BackToTop from "../components/common/BackToTop";
import Blog from "../components/common/Blog";
import Booking from "../components/common/Booking";
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
      {/* Topbar Start */}
      <TopBar />

      {/* Navbar Start */}
      <Navbar />

      {/* Carousel Start */}
      <Corousel />

      {/* Booking Start */}
      {/* <Booking /> */}

      {/* About Start */}
      <About />

      {/* Feature Start */}
      <Feature />

      {/* Destination Start */}
      <Destination />

      {/* Service Start */}
      <Service />

      {/* Packages Start */}
      <Packages />

      {/* Registration Start */}
      <Registration />

      {/* Team Start */}
      <Team />

      {/* Testimonial Start */}
      <Testimonial />

      {/* Blog Start */}
      <Blog />

      {/* Footer Start */}
      <Footer />

      {/* Back to Top */}
      <BackToTop />
    </>
  );
};

export default Home;
