import React from "react";
import { useLocation } from "react-router-dom";
import "./Review.css";

const Review = () => {
  const location = useLocation();
  const movieName = new URLSearchParams(location.search).get("movieName");
  const movieReview = new URLSearchParams(location.search).get("movieReview");

  return (
    <div className="review-page">
      <div className="review-container">
        <h1>{movieName} Review</h1>
        <p>{movieReview}</p>
      </div>
    </div>
  );
};

export default Review;
