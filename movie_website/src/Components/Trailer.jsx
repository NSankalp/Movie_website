import React from "react";
import { useLocation } from "react-router-dom";
import "./Trailer.css";

const Trailer = () => {
  const location = useLocation();
  const videoUrl = new URLSearchParams(location.search).get("videoUrl");

  return (
    <div className="trailer-page">
      <div className="trailer-container">
        <h1>Movie Trailer</h1>
        {videoUrl ? (
          <iframe
            width="800"
            height="450"
            src={videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Movie Trailer"
          ></iframe>
        ) : (
          <p>No trailer available.</p>
        )}
      </div>
    </div>
  );
};

export default Trailer;
