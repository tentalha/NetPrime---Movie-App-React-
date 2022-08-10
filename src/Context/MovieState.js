import { useState } from "react";
import MovieContext from "./MoviesContext";

function MovieState({ children }) {
  const [search, setSearch] = useState("");

  function updateSearchState(text) {
    setSearch(text);
  }

  return (
    <MovieContext.Provider
      value={{ search, updateSearchState}}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default MovieState;
