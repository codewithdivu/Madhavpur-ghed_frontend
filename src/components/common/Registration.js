import React from "react";

const Registration = () => {
  return (
    <div
      className="container-fluid bg-registration py-5"
      style={{ margin: "90px 0" }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="mb-4">
              <h6
                className="text-primary text-uppercase"
                style={{ letterSpacing: "5px" }}
              >
                Sign Up
              </h6>
              <h1 className="text-white">
                <span className="text-primary">30% OFF</span> For Honeymoon
              </h1>
            </div>
            <p className="text-white">
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
              Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
              dolor
            </p>
            <ul className="list-inline text-white m-0">
              <li className="py-2">
                <i className="fa fa-check text-primary mr-3"></i>Labore eos amet
                dolor amet diam
              </li>
              <li className="py-2">
                <i className="fa fa-check text-primary mr-3"></i>Etsea et sit
                dolor amet ipsum
              </li>
              <li className="py-2">
                <i className="fa fa-check text-primary mr-3"></i>Diam dolor diam
                elitripsum vero.
              </li>
            </ul>
          </div>
          <div className="col-lg-5">
            <div className="card border-0">
              <div className="card-header bg-primary text-center p-4">
                <h1 className="text-white m-0">Contact For Query</h1>
              </div>
              <div className="card-body rounded-bottom bg-white p-5">
                <form
                  name="sentMessage"
                  id="contactForm"
                  novalidate="novalidate"
                >
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="name"
                      placeholder="Your Name"
                      required="required"
                      data-validation-required-message="Please enter your Name"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <input
                      type="email"
                      className="form-control p-4"
                      id="email"
                      placeholder="Your Email"
                      required="required"
                      data-validation-required-message="Please enter your Email"
                    />
                    <p className="help-block text-danger"></p>
                  </div>

                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="subject"
                      placeholder="Subject"
                      required="required"
                      data-validation-required-message="Please enter a subject"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control py-3 px-4"
                      rows="5"
                      id="message"
                      placeholder="Message"
                      required="required"
                      data-validation-required-message="Please enter your message"
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-primary py-3 px-4"
                      type="submit"
                      id="sendMessageButton"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
