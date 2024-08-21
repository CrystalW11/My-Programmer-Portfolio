/** @format */

import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UsersFeedbackDetails = (props) => {
  const [usersFeedback, setUsersFeedback] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/usersFeedbacks/${id}`)
      .then((res) => {
        console.log(res);
        setUsersFeedback(res.data);
      })
      .catch((err) => {
        console.error("Error fetching user feedback details:", err);
      });
  }, [id]);

  const deleteHandler = async (feedbackId) => {
    try {
      await axios.delete(
        `http://localhost:8000/api/usersFeedbacks/${feedbackId}/details`
      );
      navigate("/"); // Navigate to home or another page after deletion
    } catch (err) {
      console.error("Error deleting user feedback:", err);
    }
  };

  return (
    <>
      <div className="">
        <Nav firstName={usersFeedback.firstName} />
        <div className="card-body container border">
          <h2>User Feedback:</h2>
          <p>{usersFeedback.feedback}</p>
          <br />
          <h2>Position Title:</h2>
          <p>{usersFeedback.positionTitle}</p>
          <br />
          <h2>Company Name:</h2>
          <p>{usersFeedback.companyName}</p>
          <button
            className="btn btn-danger"
            onClick={() => deleteHandler(usersFeedback._id)}>
            Delete Feedback
          </button>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default UsersFeedbackDetails;
