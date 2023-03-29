import { route } from "../../constants/routes";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="container-fluid position-relative nav-bar p-0">
      <div
        className="container-lg position-relative p-0 px-lg-3"
        style={{ zIndex: 9 }}
      >
        <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
          <a href="#" className="navbar-brand">
            <h1 className="m-0 text-primary">
              <span className="text-dark">MADHAV</span>PUR
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between px-3"
            id="navbarCollapse"
          >
            <div className="navbar-nav ml-auto py-0">
              <a
                href={route.HOME}
                className={`nav-item nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </a>
              <a
                href={route.ABOUT}
                className={`nav-item nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
              >
                About
              </a>
              {/* <a
                href={route.SERVICE}
                className={`nav-item nav-link ${
                  location.pathname === "/service" ? "active" : ""
                }`}
              >
                Services
              </a> */}
              {/* <a
                href={route.TOUR}
                className={`nav-item nav-link ${
                  location.pathname === "/tour" ? "active" : ""
                }`}
              >
                Tour Packages
              </a> */}
              {/* <div className="nav-item dropdown">
                <a
                  href="#"
                  className={`nav-link dropdown-toggle ${
                    location.pathname === "/blog" ||
                    location.pathname === "/blogDetail" ||
                    location.pathname === "/testomonial" ||
                    location.pathname === "/guide" ||
                    location.pathname === "/destination"
                      ? "active"
                      : ""
                  }`}
                  data-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu border-0 rounded-0 m-0">
                  <a
                    href={route.BLOG}
                    className={`dropdown-item ${
                      location.pathname === "/blog" ? "active" : ""
                    }`}
                  >
                    Blog Grid
                  </a>

                  <a
                    href={route.BLOG_DETAILS}
                    className={`dropdown-item ${
                      location.pathname === "/blogDetail" ? "active" : ""
                    }`}
                  >
                    Blog Detail
                  </a>
                  <a
                    href={route.DESTINATION}
                    className={`dropdown-item ${
                      location.pathname === "/destination" ? "active" : ""
                    }`}
                  >
                    Destination
                  </a>
                  <a
                    href={route.GUIDE}
                    className={`dropdown-item ${
                      location.pathname === "/guide" ? "active" : ""
                    }`}
                  >
                    Travel Guides
                  </a>
                  <a
                    href={route.TESTOMONIAL}
                    className={`dropdown-item ${
                      location.pathname === "/testomonial" ? "active" : ""
                    }`}
                  >
                    Testimonial
                  </a>
                </div>
              </div> */}
              <a
                href={route.CONTACT}
                className={`nav-item nav-link ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
