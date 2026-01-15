import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Education from "./Education";
import Pricing from "./Pricing";
import OpenAccounts from "../OpenAccounts";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccounts />
    </>
  );
}

export default HomePage;
