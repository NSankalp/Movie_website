import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainImage from "./Components/MainImage";
import Post from "./Components/Post";
import Review from "./Components/Review";
import Trailer from "./Components/Trailer";
import Signup from "./Components/Signup";
import Log from "./Components/Log";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="body">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route
              path="/home"
              element={
                <>
                  <MainImage />
                  <Post />
                </>
              }
            />
            <Route path="/review" element={<Review />} />
            <Route path="/trailer" element={<Trailer />} />
            <Route path="/login" element={<Log />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
