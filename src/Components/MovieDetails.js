import React, { useEffect, useState } from "react";
import { FaImdb } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { BsFillCalendarDateFill as Date } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams, useNavigate } from "react-router-dom";
import SuggestedDetail from "./SuggestedDetail";
import Spinner from "./Spinner";
import "./style.css";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieDetail, setMovieDetail] = useState(null);
  const [suggestedMovies, setSuggestedMovies] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    getDetails();
    getSuggested();
  }, [id]);

  function truncate(str) {
    return str.length > 255 ? str.slice(0, 255 - 1) + "..." : str;
  }

  const getDetails = async () => {
    const url = `https://yts.torrentbay.to/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`;
    const response = await fetch(url);
    const result = await response.json();
    const finalResult = result?.data?.movie;
    setMovieDetail(finalResult);
    setLoad(false);
  };

  const getSuggested = async () => {
    const url = `https://yts.torrentbay.to/api/v2/movie_suggestions.json?movie_id=${id}`;
    const response = await fetch(url);
    const result = await response.json();
    const finalResult = result?.data?.movies;
    setSuggestedMovies(finalResult);
  };

  const styles = {
    backgroundImage: `url('${movieDetail?.background_image_original}')`,
  };

  return (
    <section
      style={styles}
      className="h-screen w-full flex items-center justify-between bg-opacity-25 mySection text-white"
    >
      {load ? (
        <Spinner />
      ) : (
        <>
          <div className="flex justify-center items-center h-[500px] p-5 gap-3 rounded-3xl details--section">
            <img src={movieDetail?.medium_cover_image || "/nosrc"} alt="" />
            <div className="flex flex-col gap-4">
              <h1 className="text-lg ">
                {movieDetail?.title_english || "Title"}
              </h1>
              <span className="text-[10px]">
                {movieDetail?.genres?.length > 0
                  ? movieDetail?.genres[0]
                  : "Not available"}
              </span>
              <p className="max-w-sm font-extralight text-justify">
                {truncate(movieDetail?.description_full) || "Description"}
              </p>
              <div className="flex gap-3">
                <div className="flex justify-center items-center gap-1">
                  <FaFileDownload size={30} color="FFE69A" />
                  <span className="text-xs">
                    {movieDetail?.torrents?.length > 0
                      ? movieDetail?.torrents[0]?.size
                      : "Not available"}
                  </span>
                </div>
                <div className="flex justify-center items-center gap-1 mx-4">
                  <FaImdb size={30} color="yellow" />
                  <span className="text-xs">
                    {movieDetail?.rating || "No Rating"}
                  </span>
                  <AiFillStar size={25} color="green" />
                </div>

                <div className="flex justify-center items-center gap-1">
                  <Date size={30} color="#120E43" />
                  <span className="text-xs">{movieDetail?.year || "1980"}</span>
                </div>
              </div>
              <div className="flex gap-4 ml-16">
                <div
                  className="bg-[#46B2E0] w-20 p-1 rounded-xl bg-[#242B2E] text-white cursor-pointer flex justify-center items-center"
                  onClick={() => navigate(-1)}
                >
                  <BiArrowBack size={30} />
                  <span className="mx-2">Back</span>
                </div>
                {movieDetail?.torrents.length > 0 && (
                  <a
                    href={movieDetail?.torrents[0]?.url}
                    className="bg-[#46B2E0] w-32 p-1 rounded-xl bg-[#242B2E] text-white cursor-pointer flex justify-center items-center p-2 "
                  >
                    <BsDownload size={30} />
                    <span className="mx-2">Download</span>
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-md ml-4 ">Similar Movies</p>
            {suggestedMovies.length > 0 && (
              <div className="grid grid-cols-2 grid-rows-2 mr-10  mt-0">
                <SuggestedDetail
                  image={suggestedMovies[0].medium_cover_image}
                  id={suggestedMovies[0].id}
                />
                <SuggestedDetail
                  image={suggestedMovies[1].medium_cover_image}
                  id={suggestedMovies[1].id}
                />
                <SuggestedDetail
                  image={suggestedMovies[2].medium_cover_image}
                  id={suggestedMovies[2].id}
                />
                <SuggestedDetail
                  image={suggestedMovies[3].medium_cover_image}
                  id={suggestedMovies[3].id}
                />
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
}

export default MovieDetails;
