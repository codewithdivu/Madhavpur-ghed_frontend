import React from "react";
import BackToTop from "../components/common/BackToTop";
import BlogDetail from "../components/common/BlogDetail";
import Booking from "../components/common/Booking";
import Footer from "../components/common/Footer";
import HeaderBlogDetail from "../components/common/Headers/HeaderBlogDetail";
import Navbar from "../components/common/Navbar";
import TopBar from "../components/common/TopBar";

const BlogDetailPage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeaderBlogDetail />
      <Booking />
      <BlogDetail />
      <Footer />
      <BackToTop />
    </>
  );
};

export default BlogDetailPage;
