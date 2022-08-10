import MovieSection from "./Components/MovieSection";
import MovieState from "./Context/MovieState";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import TopBar from "./layout/TopBar";
import Footer from "./layout/Footer";
import MovieDetails from "./Components/MovieDetails";

function App() {
  return (
    <div className="font-mochi main--body">
      <Router>
        <MovieState>
          <TopBar />
          <Routes>
            <Route path="/" element={<Navigate to="/movies" />} />
            <Route
              path="movies"
              element={<MovieSection key="720p" quality="720p" />}
            />
            <Route
              path="movies/1080p"
              element={<MovieSection key="1080p" quality="1080p" />}
            />
            <Route
              key="3D"
              path="movies/3D"
              element={<MovieSection key="3D" quality="3D" />}
            />
            <Route
              key="3D"
              path="movies/details/:id"
              element={<MovieDetails />}
            />
            <Route
              path="*"
              element={<h1>No page found.</h1>}
            />
          </Routes>
          <Footer />
        </MovieState>
      </Router>
    </div>
  );
}

export default App;
