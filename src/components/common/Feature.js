import React from "react";

const Feature = () => {
  return (
    <div className="container-fluid pb-5">
      <div className="container pb-5">
        <div className="row">
          <div className="col-md-4">
            <div className="d-flex mb-4 mb-lg-0">
              <div
                className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
                style={{ height: "100px", width: "100px" }}
              >
                <i className="fa fa-2x fa-gopuram text-white"></i>
              </div>
              <div className="d-flex flex-column">
                <h5 className="">Madhavrai Temple</h5>
                <p className="m-0">
                  Madhavpur is the site of a 15th-century temple of Madhavraiji
                  who is a form of Lord Krishna.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex mb-4 mb-lg-0">
              <div
                className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
                style={{ height: "100px", width: "100px" }}
              >
                <i className="fa fa-2x fa-award text-white"></i>
              </div>
              <div className="d-flex flex-column">
                <h5 className="">Vallabhacharya's Bethak</h5>
                <p className="m-0">
                  Madhavpur is also culturally significant due to one of the
                  seats of Vallabhacharya.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex mb-4 mb-lg-0">
              <div
                className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
                style={{ height: "100px", width: "100px" }}
              >
                <i className="fa fa-2x fa-globe text-white"></i>
              </div>
              <div className="d-flex flex-column">
                <h5 className="">Annual Fair</h5>
                <p className="m-0">
                  Every year, for five days from day of Ram Navmi, a cultural
                  fair is organized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
