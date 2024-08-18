/** @format */

import React, { useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

const Create = (props) => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [errors, setErrors] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    const newUsersFeedback = {
      firstName,
      lastName,
      feedback,
      positionTitle,
      companyName,
    };

    axios
      .post(`http://localhost:8000/api/usersFeedbacks`, newUsersFeedback)
      .then((res) => {
        // Navigate to the Home page on successful form submission
        navigate("/home");
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          setErrors(err.response.data.errors); // Capture and set validation errors from the backend
        } else {
          console.log(err);
        }
      });
  };

  return (
    <>
      <Nav title={"Users Feedback"} />
      <div className="container border">
        <h2>Please add your feedback</h2>
        <form className="w-50 mx-auto" onSubmit={submitHandler}>
          <div className="container-fluid">
            <label className="form-label">First Name:</label>
            {errors.firstName && (
              <p className="text-danger">{errors.firstName.message}</p>
            )}
            <input
              className="form-control custom-outline-input"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </div>
          <div className="container-fluid">
            <label className="form-label">Last Name:</label>
            {errors.lastName && (
              <p className="text-danger">{errors.lastName.message}</p>
            )}
            <input
              className="form-control custom-outline-input"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
          <div className="container-fluid">
            <label className="form-label">Feedback:</label>
            {errors.feedback && (
              <p className="text-danger">{errors.feedback.message}</p>
            )}
            <input
              className="form-control custom-outline-input"
              type="text"
              onChange={(e) => setFeedback(e.target.value)}
              value={feedback}
            />
          </div>
          <br />
          <div className="container-fluid">
            <label className="form-label">Position Title:</label>
            {errors.positionTitle && (
              <p className="text-danger">{errors.positionTitle.message}</p>
            )}
            <input
              className="form-control custom-outline-input"
              type="text"
              onChange={(e) => setPositionTitle(e.target.value)}
              value={positionTitle}
            />
          </div>
          <div className="container-fluid">
            <label className="form-label">Company Name:</label>
            {errors.companyName && (
              <p className="text-danger">{errors.companyName.message}</p>
            )}
            <input
              className="form-control custom-outline-input"
              type="text"
              onChange={(e) => setCompanyName(e.target.value)}
              value={companyName}
            />
          </div>
          <div>
            <br />
            <button className="btn btn-purple" type="submit">
              Add Feedback
            </button>
          </div>
          <br />
        </form>
      </div>
    </>
  );
};

export default Create;
