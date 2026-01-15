import React from "react";

function Universe() {
  return (
    <div className="container p-5 mb-5 ">
      <div className="row text-center">
        <h2 className="m-3">The Zerodha Universe</h2>

        <p className="fs-6 text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row">
        <div className="col-4 p-3 mt-5 text-center">
          <img
            style={{ width: "50%" }}
            src="media/images/zerodhaFundhouse.png"
          />
          <p className="text-small text-muted p-3">
            Thematic investment platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5 text-center">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted  p-3">
            Thematic investment platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5 text-center">
          <img style={{ width: "60%" }} src="media/images/sensibullLogo.svg" />
          <p className="text-small text-muted p-3">
            Thematic investment platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5 text-center">
          <img style={{ width: "40%" }} src="media/images/streakLogo.png" />
          <p className="text-small text-muted p-3">
            Thematic investment platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5 text-center">
          <img style={{ width: "45%" }} src="media/images/goldenpiLogo.png" />
          <p className="text-small text-muted p-3">
            Thematic investment platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5 text-center">
          <img
            className=""
            style={{ width: "40%" }}
            src="media/images/dittoLogo.png"
          />
          <p className="text-small text-muted p-3">
            Thematic investment platform
          </p>
        </div>
        <button
          className="p-2 btn  mt-5 btn-primary fs-5"
          style={{ width: "20%", margin: "0  auto" }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Universe;
