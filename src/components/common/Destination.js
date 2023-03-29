import React from "react";

const Destination = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-3 pb-3">
          <h6
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Destination
          </h6>
          <h1>Explore Top Destination</h1>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="destination-item position-relative overflow-hidden mb-2">
              <img className="img-fluid" src="/madhavpur/beach.jpg" alt="" />
              <a
                className="destination-overlay text-white text-decoration-none"
                href="#"
              >
                <h5 className="text-white">Beach</h5>
                {/* <span>100 Cities</span> */}
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="destination-item position-relative overflow-hidden mb-2">
              <img
                className="img-fluid"
                src="madhavpur/Madhavpur_4.jpg"
                alt=""
              />
              <a
                className="destination-overlay text-white text-decoration-none"
                href="#"
              >
                <h5 className="text-white">Madhavarai Temple</h5>
                {/* <span>100 Cities</span> */}
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="destination-item position-relative overflow-hidden mb-2">
              <img
                className="img-fluid"
                src="madhavpur/Madhavpur_3.jpg"
                alt=""
              />
              <a
                className="destination-overlay text-white text-decoration-none"
                href="#"
              >
                <h5 className="text-white">Fair</h5>
                {/* <span>100 Cities</span> */}
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="destination-item position-relative overflow-hidden mb-2">
              <img className="img-fluid" src="madhavpur/nature.jpg" alt="" />
              <a
                className="destination-overlay text-white text-decoration-none"
                href="#"
              >
                <h5 className="text-white">Chopati</h5>
                {/* <span>100 Cities</span> */}
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="destination-item position-relative overflow-hidden mb-2">
              <img className="img-fluid" src="madhavpur/sea.jpg" alt="" />
              <a
                className="destination-overlay text-white text-decoration-none"
                href="#"
              >
                <h5 className="text-white">Sea</h5>
                {/* <span>100 Cities</span> */}
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="destination-item position-relative overflow-hidden mb-2">
              <img className="img-fluid" src="madhavpur/budhdha.jpg" alt="" />
              <a
                className="destination-overlay text-white text-decoration-none"
                href="#"
              >
                <h5 className="text-white">Osho Ashram</h5>
                {/* <span>100 Cities</span> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
