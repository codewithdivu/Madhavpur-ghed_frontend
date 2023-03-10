import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import TourPackagePage from "./pages/TourPackagePage";

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
  {
    path: "/service",
    element: <ServicePage />,
  },
  {
    path: "/tour",
    element: <TourPackagePage />,
  },
]);
