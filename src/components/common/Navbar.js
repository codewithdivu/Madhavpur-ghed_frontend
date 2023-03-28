import { route } from "../../constants/routes";

const Navbar = () => {




  
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
              <a href={route.HOME} className="nav-item nav-link active">
                Home
              </a>
              <a href={route.ABOUT} className="nav-item nav-link">
                About
              </a>
              <a href={route.SERVICE} className="nav-item nav-link">
                Services
              </a>
              <a href={route.TOUR} className="nav-item nav-link">
                Tour Packages
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu border-0 rounded-0 m-0">
                  <a href={route.BLOG} className="dropdown-item">
                    Blog Grid
                  </a>
                  <a href={route.BLOG_DETAILS} className="dropdown-item">
                    Blog Detail
                  </a>
                  <a href={route.DESTINATION} className="dropdown-item">
                    Destination
                  </a>
                  <a href={route.GUIDE} className="dropdown-item">
                    Travel Guides
                  </a>
                  <a href={route.TESTOMONIAL} className="dropdown-item">
                    Testimonial
                  </a>
                </div>
              </div>
              <a href={route.CONTACT} className="nav-item nav-link">
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

// $(document).ready(function () {
//   function toggleNavbarMethod() {
//     if ($(window).width() > 992) {
//       $(".navbar .dropdown")
//         .on("mouseover", function () {
//           $(".dropdown-toggle", this).trigger("click");
//         })
//         .on("mouseout", function () {
//           $(".dropdown-toggle", this).trigger("click").blur();
//         });
//     } else {
//       $(".navbar .dropdown").off("mouseover").off("mouseout");
//     }
//   }
//   toggleNavbarMethod();
//   $(window).resize(toggleNavbarMethod);
// });
