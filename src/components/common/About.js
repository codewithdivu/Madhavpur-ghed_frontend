import React from "react";

const About = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-6" style={{ minHeight: "500px" }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100"
                src="img/about.jpg"
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-6 pt-5 pb-lg-5">
            <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
              <h6
                className="text-primary text-uppercase"
                style={{ letterSpacing: "5px" }}
              >
                About Us
              </h6>
              <h1 className="mb-3">Madhavpur Ghed</h1>
              <p>
                Madhavpur (Ghed) is a small but culturally significant village
                in state of Gujarat, India. It lies on the seashore. Madhavpur
                is the site of a 15th-century temple of Madhavraiji who is a
                form of Lord Krishna. The original temple has been badly damaged
                by attacks by Muslim invaders, however a ruined structure is
                still present and gives idea of original undamaged temple. A
                newly constructed temple is used for worship now adjacent to the
                old one.
              </p>
              <div className="row mb-4">
                <div className="col-6">
                  {/* <img className="img-fluid" src="img/about-1.jpg" alt="" /> */}
                  <img
                    className="img-fluid"
                    src="madhavpur/Madhavpur_4.jpg"
                    alt=""
                  />
                </div>
                <div className="col-6">
                  {/* <img className="img-fluid" src="img/about-2.jpg" alt="" /> */}
                  <img
                    className="img-fluid"
                    src="madhavpur/Madhavpur_3.jpg"
                    alt=""
                  />
                </div>
              </div>
              {/* <a href="#" className="btn btn-primary mt-1">
                Book Now
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
