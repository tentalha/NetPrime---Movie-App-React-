import React, { useContext, useState } from "react";
import { RiMovieFill } from "react-icons/ri";
import MovieContext from "../Context/MoviesContext";
import { Link } from "react-router-dom";

function TopBar() {
  const [search, setSearch] = useState("");
  let searchContext = useContext(MovieContext);

  function displayHome() {
    searchContext.updateSearchState("");
    setSearch("");
  }

  return (
    <div className="bg-white h-12 fixed top-0 right-0 left-0 shadow-md flex items-center justify-between z-50 mb-10">
      <Link to="/movies">
        <div
          className="flex items-center cursor-pointer ml-4 justify-center"
          onClick={displayHome}
        >
          <RiMovieFill size={35} />
          <h1 className="ml-2 text-blue-400 text-xl">NetPrime</h1>
        </div>
      </Link>
      <div className="flex list-none ">
        <li className="ml-6 cursor-pointer hover:bg-blue-300 hover: rounded-2xl p-2">
          <Link to="/">720p</Link>
        </li>
        <li className="ml-6 cursor-pointer hover:bg-blue-300 hover: rounded-2xl p-2">
          <Link to="movies/3D">3D</Link>
        </li>
        <li className="ml-6 cursor-pointer hover:bg-blue-300 hover: rounded-2xl p-2">
          <Link to="movies/1080p">1080p</Link>
        </li>
        {/* <li className="mx-6 cursor-pointer hover:bg-blue-300 hover: rounded-2xl p-2">
          <Link>Price</Link>
        </li>
        {/* <Dropdown/> */}
        <input
          type="text"
          className="p-2 mx-2 rounded-3xl text-red-400"
          placeholder="Type here..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button
          className="bg-blue-300 p-2 rounded-2xl mr-2"
          onClick={() => searchContext.updateSearchState(search)}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default TopBar;
