import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5 ">
      <div className="row text-center">
        <h1 className="mt-5">Zerodha Products </h1>
        <h5 className="m-3 text-muted">
          Sleek, modern, and intuitive trading platforms
        </h5>

        <p className="fs-6">
          Check out our{" "}
          <a className="text-decoration-none" href="#">
            {" "}
            investment offerings →
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Hero;
