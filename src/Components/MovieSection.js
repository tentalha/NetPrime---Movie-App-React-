import React, { useEffect, useContext, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieContext from "../Context/MoviesContext";
import Movie from "./Movie";
import Spinner from "./Spinner";

function MovieSection(props) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(0);
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [load, setLoad] = useState(true);
  const pageLimit = 15;
  const quality = props.quality;

  const search = useContext(MovieContext);

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (search.search.length > 0 && search.search !== "") {
      fetchSearchedMovie();
    }
  }, [search.search]);

  const fetchSearchedMovie = async () => {
    const url = `https://yts.torrentbay.to/api/v2/list_movies.json?quality=${quality}&query_term="${search.search}"`;
    setLoad(true);
    const response = await fetch(url);
    const result = await response.json();
    const finalData = result?.data?.movies || [];
    setLoad(false);
    if (finalData) setSearchedMovie(finalData);
  };

  const fetchMovies = async () => {
    const url = `https://yts.torrentbay.to/api/v2/list_movies.json?quality=${quality}&page=${page}&limit=${pageLimit}`;
    const response = await fetch(url);
    const result = await response.json();
    setTotalMovies(result.data.movie_count);
    const finalData = result.data.movies;
    setMovies(finalData);
    setLoad(false);
  };

  const mapAll = () => {
    return movies.map((item) => (
      <Movie
        key={item.id}
        medium_cover_image={item.medium_cover_image}
        title_english={item.title_english}
        year={item.year}
        url={item.url}
        genre={item.genres}
        imdb={item.rating}
        torrentLink={item.torrents[0].url}
        size={item.torrents[0].size}
        id={item.id}
      />
    ));
  };

  const mapSearched = () => {
    return searchedMovie.map((item) => (
      <Movie
        key={item.id}
        medium_cover_image={item.medium_cover_image}
        title_english={item.title_english}
        year={item.year}
        url={item.url}
        genre={item.genres}
        imdb={item.rating}
        torrentLink={item.torrents[0].url}
        size={item.torrents[0].size}
        id={item.id}
      />
    ));
  };

  async function fetchMoreMovies() {
    const url = `https://yts.torrentbay.to/api/v2/list_movies.json?quality=3D&page=${
      page + 1
    }&limit=${pageLimit}`;
    setPage(page + 1);
    const response = await fetch(url);
    const result = await response.json();
    setMovies(movies.concat(result.data.movies));
    setTotalMovies(result.data.movie_count);
  }

  return (
    <div className="mt-10 overflow-x-hidden	">
      {searchedMovie.length == 0 && <div></div>}
      {search.search.length > 0 ? (
        searchedMovie.length > 0 ? (
          <div className="grid grid-cols-4 grid-rows-4 m-4">
            {load ? <Spinner /> : mapSearched()}
          </div>
        ) : (
          <div className="text-center my-16 flex justify-center items-center h-14">
            <p className="w-60">No Movie found against these keywords.</p>
          </div>
        )
      ) : (
        <InfiniteScroll
          dataLength={movies.length}
          next={fetchMoreMovies}
          hasMore={page < Math.ceil(totalMovies / pageLimit)}
          loader={<h4>{<Spinner />}</h4>}
        >
          <div className="grid grid-cols-4 grid-rows-4 m-4">{mapAll()}</div>
        </InfiniteScroll>
      )}
    </div>
  );
}

export default MovieSection;
