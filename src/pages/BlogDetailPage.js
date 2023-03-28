import React from "react";
import BackToTop from "../components/common/BackToTop";
import BlogDetail from "../components/common/BlogDetail";
import Booking from "../components/common/Booking";
import Footer from "../components/common/Footer";
import Header from "../components/common/Headers/Header";
import Navbar from "../components/common/Navbar";
import TopBar from "../components/common/TopBar";

const BlogDetailPage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Header title="Blog Detail" />
      <Booking />
      <BlogDetail />
      <Footer />
      <BackToTop />
    </>
  );
};

export default BlogDetailPage;
