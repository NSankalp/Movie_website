import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <Link
            to="/home"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <span className="fs-4">MovieMania</span>
          </Link>

          <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/home" className="nav-link px-2 text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link px-2 text-white">
                Movies
              </Link>
            </li>
            <li>
              <Link to="/trailer" className="nav-link px-2 text-white">
                Trailers
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link px-2 text-white">
                Top Rated
              </Link>
            </li>
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search movies..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <Link to="/login">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
            </Link>
            <Link to="/">
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
