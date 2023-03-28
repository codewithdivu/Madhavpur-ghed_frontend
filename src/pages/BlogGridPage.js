import React from "react";
import BackToTop from "../components/common/BackToTop";
import BlogGrid from "../components/common/BlogGrid";
import Booking from "../components/common/Booking";
import Footer from "../components/common/Footer";
import Header from "../components/common/Headers/Header";
import Navbar from "../components/common/Navbar";
import TopBar from "../components/common/TopBar";

const BlogGridPage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Header title="Blog" />
      <Booking />
      <BlogGrid />
      <Footer />
      <BackToTop />
    </>
  );
};

export default BlogGridPage;
