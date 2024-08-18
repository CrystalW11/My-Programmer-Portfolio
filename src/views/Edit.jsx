/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import { useNavigate, useParams, Link } from "react-router-dom";

const Edit = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/usersFeedbacks/${id}`)
      .then((res) => {
        console.log(res);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setFeedback(res.data.feedback);
        setPositionTitle(res.data.positionTitle);
        setCompanyName(res.data.companyName);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();
    const updatedUsersFeedback = {
      firstName,
      lastName,
      feedback,
      positionTitle,
      companyName,
    };
    axios
      .put(
        `http://localhost:8000/api/usersFeedbacks/${id}`,
        updatedUsersFeedback
      )
      .then((res) => {
        navigate("/home");
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          setErrors(err.response.data.errors); // Capture validation errors from the backend
        } else {
          console.log(err);
        }
      });
  };

  return (
    <>
      <Nav firstName={`Update ${firstName}`} />
      <Link to={`/usersFeedbacks/${id}/details`}>
        <button className="btn btn-purple">Users Feedback Details</button>
      </Link>
      <br />
      <br />
      <div className="container border">
        <form className="w-50 mx-auto" onSubmit={submitHandler}>
          <div className="container-fluid">
            <label className="form-label">First Name:</label>
            <input
              className="form-control custom-outline-input"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            {errors.firstName && (
              <p className="text-danger">{errors.firstName.message}</p>
            )}
          </div>
          <div className="container-fluid">
            <label className="form-label">Last Name:</label>
            <input
              className="form-control custom-outline-input"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            {errors.lastName && (
              <p className="text-danger">{errors.lastName.message}</p>
            )}
          </div>
          <div className="container-fluid">
            <label className="form-label">Feedback:</label>
            <input
              className="form-control custom-outline-input"
              type="text"
              onChange={(e) => setFeedback(e.target.value)}
              value={feedback}
            />
            {errors.feedback && (
              <p className="text-danger">{errors.feedback.message}</p>
            )}
          </div>
          <div className="container-fluid">
            <label className="form-label">Position Title:</label>
            <input
              className="form-control custom-outline-input"
              type="text"
              onChange={(e) => setPositionTitle(e.target.value)}
              value={positionTitle}
            />
            {errors.positionTitle && (
              <p className="text-danger">{errors.positionTitle.message}</p>
            )}
          </div>
          <div className="container-fluid">
            <label className="form-label">Company Name:</label>
            <input
              className="form-control custom-outline-input"
              type="text"
              onChange={(e) => setPositionTitle(e.target.value)}
              value={positionTitle}
            />
            {errors.positionTitle && (
              <p className="text-danger">{errors.positionTitle.message}</p>
            )}
          </div>
          <br />
          <div>
            <button className="btn btn-purple">Update Feedback</button>
          </div>
          <br />
        </form>
      </div>
    </>
  );
};

export default Edit;
