import React from "react";
import BackToTop from "../components/common/BackToTop";
import BlogGrid from "../components/common/BlogGrid";
import Booking from "../components/common/Booking";
import Footer from "../components/common/Footer";
import HeaderBlog from "../components/common/Headers/HeaderBlog";
import Navbar from "../components/common/Navbar";
import TopBar from "../components/common/TopBar";

const BlogGridPage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeaderBlog />
      <Booking />
      <BlogGrid />
      <Footer />
      <BackToTop />
    </>
  );
};

export default BlogGridPage;
