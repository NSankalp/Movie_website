import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainImage.css";
import Post from "./Post";

const MainImage = () => {
  const navigate = useNavigate();

  const handleReviewClick = () => {
    navigate("/review");
  };

  return (
    <div className="main-image-container">
      <img
        src="/netflix_react_assets/assets/hero_banner.jpg"
        className="main-image"
        alt="BB2"
      />
      <div className="caption">
        <img
          src="/netflix_react_assets/assets/hero_title.png"
          className="capt"
        />
        <p>
          Discovering his ties to a secret ancient order, a young man living in
          modern Istanbul embarks on a quest to save the city from an immortal
          enemy.
        </p>
      </div>
      <button type="button" class="btn btn-light">
        Trailer
      </button>
      <button
        type="button"
        class="btn btn-light abc"
        onClick={handleReviewClick}
      >
        Review
      </button>
    </div>
  );
};

export default MainImage;
