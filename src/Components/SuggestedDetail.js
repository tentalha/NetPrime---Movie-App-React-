import React from "react";
import { Link } from "react-router-dom";

function SuggestedDetail({ image, id }) {
  return (
    <Link to={`/movies/details/${id}`}>
      <article className="m-4 h-36 w-24 cursor-pointer ">
        <img
          src={image}
          alt="Image"
          className="h-full  border-2 rounded-md border-white"
        />
      </article>
    </Link>
  );
}

export default SuggestedDetail;
