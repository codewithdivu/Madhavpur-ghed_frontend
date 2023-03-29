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
                src="img/about.jpeg"
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
                Welcome to Madhavpur beach in Gujarat, India! This small but
                culturally significant village is the site of a 15th-century
                temple of Madhavraiji, a form of Lord Krishna. It is said that
                Krishna married Rukmini at this very spot, making it an
                important pilgrimage site for Hindus.
              </p>
              <p>
                Located 58 kilometers from Porbandar, Madhavpur beach is one of
                Gujarat's most well-known beaches. Known for its extensive
                coastal route, the beach offers beautiful views of the
                crystal-clear ocean and is lined with coconut trees.
              </p>
              {/* <p>
                Madhavpur beach is more than just a place to relax and enjoy the
                views. There are a variety of activities that visitors can do,
                including swimming, sunbathing, and fishing. You can also take a
                boat ride out to the nearby islands and explore their unique
                ecosystems.
              </p> */}
              {/* <p>
                For those who are looking for a more cultural experience, there
                are many temples in the area dedicated to Hindu gods and
                goddesses. One of the most popular is the temple of Madhavraiji,
                who is believed to have been a form of Lord Krishna.
              </p> */}
              {/* <p>
                The beach is also a great place to take part in some of the
                local festivals and events. During the summer months, locals and
                visitors alike gather to celebrate the annual Madhavpur Fair.
                This festive event features traditional music, dance, and other
                activities, and is perfect for families or couples looking to
                have some fun.
              </p> */}
              {/* <p>
                If you're looking for a beach destination with plenty of
                cultural and natural attractions, Madhavpur beach is the place
                for you. Whether you're looking to relax, explore, or
                participate in a fun festival, you'll find something to do here.
                So, come and experience the beauty of Gujarat's most well-known
                beach today!
              </p> */}
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
