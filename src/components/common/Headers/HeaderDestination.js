import React from "react";

const HeaderDestination = () => {
  return (
    <div class="container-fluid page-header">
      <div class="container">
        <div
          class="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "400px" }}
        >
          <h3 class="display-4 text-white text-uppercase">Destination</h3>
          <div class="d-inline-flex text-white">
            <p class="m-0 text-uppercase">
              <a class="text-white" href="#">
                Home
              </a>
            </p>
            <i class="fa fa-angle-double-right pt-1 px-3"></i>
            <p class="m-0 text-uppercase">Destination</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDestination;
