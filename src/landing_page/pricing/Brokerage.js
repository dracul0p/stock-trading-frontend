import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-6 p-4">
          <a style={{ textDecoration: "none" }} href="">
            <h1 className="fs-5">Brokerage Calculator</h1>{" "}
          </a>
          <ul
            className="text-muted "
            style={{ textAlign: "left", lineHeight: "2.5 ", fontSize:"12px" }}
          >
            <li>
              Call & Trade and RMS auto square-off attract additional charges of
              ₹50 + GST per order.{" "}
            </li>
            <li>
              Digital contract notes are sent via e-mail, while physical copies
              of contract notes, if required, are charged at ₹20 per contract
              note with applicable courier charges.
            </li>
            <li>
              For NRI accounts (Non-PIS), brokerage is 0.5% or ₹100 per executed
              equity order, whichever is lower, and for NRI accounts (PIS),
              brokerage is 0.5% or ₹200 per executed equity order, whichever is
              lower.{" "}
            </li>
            <li>
              {" "}
              If the trading account is in debit balance, brokerage will be
              charged at ₹40 per executed order instead of ₹20.
            </li>
          </ul>
        </div>
        <div className="col-6 p-4">
          <a style={{ textDecoration: "none" }} href="">
            <h1 className="fs-5"> List of charges</h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
