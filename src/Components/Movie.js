import React from "react";
import { Link } from "react-router-dom";

function Movie(props) {
  return (
    <div className="mb-4 text-xs shadow-md m-3 p-4  rounded-2xl ">
      <Link to={`/movies/details/${props.id}`}>
        <img src={props.medium_cover_image} alt="Image" />
        <h1 className="max-w-xs my-2 text-[black]">{props.title_english}</h1>
      </Link>
      <h1 className="my-2 mb-2 text-base text-[black]">{props.year}</h1>
      {props.genre && (
        <h1 className="max-w-xs my-2 text-[black] mb-4">
          {props.genre[0]} / {props.genre[1]}
        </h1>
      )}
      {/* <p className="mb-3 ">IMDB: {props.imdb}</p>
      <p className="mb-4">Size: {props.size}</p> */}
      <a
        href={props.url}
        target="_blank"
        className="bg-yellow-300 p-2 rounded-xl hover:bg-red-300 hover:text-[#dfe6e9] mb-6"
      >
        Go to torrent
      </a>
      <a
        href={props.torrentLink}
        className="bg-yellow-300 p-2 rounded-xl hover:bg-red-300 hover:text-[#dfe6e9] my-4 mx-2"
      >
        Download
      </a>
    </div>
  );
}

export default React.memo(Movie);
