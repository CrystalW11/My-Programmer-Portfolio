/** @format */

import React, { useState } from "react";
import Nav from "../components/Nav";
import DisplayAll from "../components/DisplayAll";

const Home = (props) => {
  return (
    <>
      <div className="">
        <Nav title={"Users Feedback List"} />
        <DisplayAll />
      </div>
    </>
  );
};

export default Home;
