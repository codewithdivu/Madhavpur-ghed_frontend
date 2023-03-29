import React from "react";

const Service = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-3 pb-3">
          <h6
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            How to get there
          </h6>
          <h1>There will be 3 ways to reach us</h1>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="service-item bg-white text-center mb-2 py-5 px-4">
              <i className="fa fa-2x fa-road mx-auto mb-4"></i>
              <h5 className="mb-2">By Road</h5>
              <p className="m-0" align="justify">
                The Madhavpur Beach is well connected with major cities of
                Gujarat state such as Porbandar (55 Km), Somnath (73 Km),
                Junagadh (101 Km) and Rajkot (191 Km) through road network.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="service-item bg-white text-center mb-2 py-5 px-4">
              <i className="fa fa-2x fa-train mx-auto mb-4"></i>
              <h5 className="mb-2">By Train</h5>
              <p className="m-0" align="justify">
                The nearest major Railway station is Porbandar and Junagadh, in
                which Porbandar around 55 km and Junagadh around 102 Km from
                Madhavpur Beach and it takes about 1 Hour to reach.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="service-item bg-white text-center mb-2 py-5 px-4">
              <i className="fa fa-2x fa-plane mx-auto mb-4"></i>
              <h5 className="mb-2">By Air</h5>
              <p className="m-0" align="justify">
                The nearest Airport is at Porbandar, which has reasonable
                connectivity to cities in India. Porbandar Airport is located at
                a distance of approximately 58 km from Madhavpur Beach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
