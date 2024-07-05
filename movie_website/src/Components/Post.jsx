import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cards_data from "../../public/netflix_react_assets/assets/cards/Cards_data.js";
import "./Post.css";

const Post = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };

  return (
    <div className="posts">
      <h2 className="heading-color">Highly Rated</h2>
      <div className="post-list">
        {cards_data.map((card, index) => (
          <div className="post" key={index} onClick={() => openModal(card)}>
            <img src={card.image} alt={card.name} />
            <p className="card-color">{card.name}</p>
          </div>
        ))}
      </div>
      <h2 className="heading-color">English Films</h2>{" "}
      <div className="post-list">
        {cards_data.map((card, index) => (
          <div className="post" key={index} onClick={() => openModal(card)}>
            <img src={card.image} alt={card.name} />
            <p className="card-color">{card.name}</p>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>{selectedMovie.name}</h3>
            <button
              onClick={() => {
                closeModal();
                navigate(`/trailer?videoUrl=${selectedMovie.trailerUrl}`);
              }}
              className="btn btn-light"
            >
              Trailer
            </button>
            <button
              onClick={() => {
                closeModal();
                navigate(
                  `/review?movieName=${selectedMovie.name}&movieReview=${selectedMovie.review}`
                );
              }}
              className="btn btn-light"
            >
              Review
            </button>
            <button onClick={closeModal} className="btn btn-close"></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
