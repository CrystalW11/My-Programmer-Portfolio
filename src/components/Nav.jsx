/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import GitHubLogo from "../assets/GitHubLogo.png"; // Adjust the path if necessary
import LinkedInSymbol from "../assets/LinkedInSymbol.png";

const Nav = (props) => {
  const { firstName, lastName } = props;

  return (
    <>
      <header className="flex-fill">
        <br />
        <div className="">
          <a
            href="https://github.com/CrystalW11/My-Programmer-Portfolio.git"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className="symbols"
              src={GitHubLogo}
              alt="GitHubLogo"
              style={{ width: "70px", height: "70px" }}
            />
          </a>
          |
          <a
            href="https://www.linkedin.com/in/crystal-warmack/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className="symbols"
              src={LinkedInSymbol}
              alt="LinkedInSymbol"
              style={{ width: "70px", height: "70px" }}
            />
          </a>
          <br />
          <br />
        </div>
        <br />
        <nav className="d-flex justify-content-around">
          <br />
          <div className="card-label">
            <Link className="btn btn-purple" to={"/"}>
              Back to home
            </Link>
            |
            <Link className="btn btn-purple" to={"/create"}>
              Add Feedback
            </Link>
            |
            <Link className="btn btn-purple" to={"/home"}>
              View Feedback Table
            </Link>
            |
            <br />
            <br />
          </div>
          <div className=""> </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
