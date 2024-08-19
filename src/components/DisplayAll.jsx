/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DisplayAll = (props) => {
  const [usersFeedbacks, setUsersFeedbacks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://my-programmer-portfolio.vercel.app/api/usersFeedbacks")
      .then((res) => {
        console.log(res.data);
        setUsersFeedbacks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const deleteHandler = (id) => {
    axios
      .delete(
        `https://my-programmer-portfolio.vercel.app/api/usersFeedbacks/${id}`
      )
      .then((res) => {
        navigate("/");
      })
      .catch(err);
  };

  return (
    <>
      <div className="container">
        <h2 className="home-header">Please leave your Feedback!</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="form-label">First Name</th>
              <th className="form-label">Last Name</th>
              <th className="form-label">Feedback</th>
              <th className="form-label">Position Title</th>
              <th className="form-label">Company Name</th>
              <th className="form-label">Actions</th>
            </tr>
          </thead>
          <br />
          <tbody>
            {usersFeedbacks.map((usersFeedback) => (
              <tr key={usersFeedback._id}>
                <td>{usersFeedback.firstName}</td>
                <td>{usersFeedback.lastName}</td>
                <td>{usersFeedback.feedback}</td>
                <td>{usersFeedback.positionTitle}</td>
                <td>{usersFeedback.companyName}</td>
                <td>
                  <Link
                    className="btn btn-primary"
                    to={`/usersFeedbacks/${usersFeedback._id}/details`}>
                    Users Details
                  </Link>
                  |
                  <Link
                    className="btn btn-info"
                    to={`/usersFeedbacks/${usersFeedback._id}/edit`}>
                    Edit
                  </Link>
                  |
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteHandler(usersFeedback._id)}>
                    Delete {usersFeedback.title}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DisplayAll;
