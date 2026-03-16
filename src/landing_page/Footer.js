import React from "react";

function Footer() {
  return (
    <footer
      className="border-top"
      style={{ backgroundColor: "rgb(250,250,250)", padding: "5px" }}
    >
      <div className="container mt-5">
        <div className="row mt-5">

          <div className="col">
            <img
              src="media/images/logo.svg"
              style={{ width: "50%" }}
              alt="Zerodha logo"
            />

            <p>
              © 2010 - 2025, Zerodha Broking Ltd.
              <br /> All rights reserved.
            </p>
          </div>

          <div className="col">
            <p>Company</p>
            <br />

            <a href="/about">About</a>
            <br />

            <a href="/pricing">Pricing</a>
            <br />

            <a href="/referral">Referral programme</a>
            <br />

            <a href="/careers">Careers</a>
            <br />

            <a href="/tech">Zerodha.tech</a>
            <br />

            <a href="/press">Press & media</a>
            <br />

            <a href="/csr">Zerodha cares (CSR)</a>
            <br />
          </div>

          <div className="col">
            <p>Support</p>

            <a href="/contact">Contact us</a>
            <br />

            <a href="/support">Support portal</a>
            <br />

            <a href="/blog">Z-Connect blog</a>
            <br />

            <a href="/charges">List of charges</a>
            <br />

            <a href="/resources">Download & resources</a>
            <br />
          </div>

          <div className="col">
            <p>Account</p>

            <a href="/open-account">Open an account</a>
            <br />

            <a href="/fund-transfer">Fund transfer</a>
            <br />

            <a href="/challenge">60 day challenge</a>
            <br />
          </div>

        </div>

        {/* LONG DISCLAIMER TEXT (unchanged) */}
        <div className="mt-5 text-muted" style={{ fontSize: "10.4px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: INZ000031633...
          </p>
        </div>
      </div>

      <div className="text-center mt-4">
        <small>
          <a href="/nse" className="text-decoration-none mx-2">NSE</a> |
          <a href="/bse" className="text-decoration-none mx-2">BSE</a> |
          <a href="/mcx" className="text-decoration-none mx-2">MCX</a> |
          <a href="/terms" className="text-decoration-none mx-2">Terms & Conditions</a> |
          <a href="/policies" className="text-decoration-none mx-2">Policies & Procedures</a> |
          <a href="/privacy" className="text-decoration-none mx-2">Privacy Policy</a> |
          <a href="/disclosure" className="text-decoration-none mx-2">Disclosure</a> |
          <a href="/investor-attention" className="text-decoration-none mx-2">For Investor's Attention</a> |
          <a href="/investor-charter" className="text-decoration-none mx-2">Investor Charter</a>
        </small>
      </div>
    </footer>
  );
}

export default Footer;
