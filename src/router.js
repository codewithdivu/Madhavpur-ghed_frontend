import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import BlogGridPage from "./pages/BlogGridPage";
import ContactPage from "./pages/ContactPage";
import DestinationPage from "./pages/DestinationPage";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import TestomonialPage from "./pages/TestomonialPage";
import TourPackagePage from "./pages/TourPackagePage";
import TravelGuidePage from "./pages/TravelGuidePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  // {
  //   path: "/service",
  //   element: <ServicePage />,
  // },
  // {
  //   path: "/tour",
  //   element: <TourPackagePage />,
  // },
  // {
  //   path: "/testomonial",
  //   element: <TestomonialPage />,
  // },
  // {
  //   path: "/guide",
  //   element: <TravelGuidePage />,
  // },
  // {
  //   path: "/destination",
  //   element: <DestinationPage />,
  // },
  // {
  //   path: "/blogDetail",
  //   element: <BlogDetailPage />,
  // },
  // {
  //   path: "/blog",
  //   element: <BlogGridPage />,
  // },
]);
