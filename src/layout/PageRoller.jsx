import React from "react";

function PageRoller({ page, totalMovies, pagePrev, pageNext }) {
  return (
    <div>
      <div className="flex items-center justify-between fixed top-12 right-0 left-[150px] shadow-md bg-transparent ">
        <button
          style={{
            opacity: page <= 1 ? 0.5 : 1.0,
          }}
          className="bg bg-blue-300 p-2 rounded-2xl m-2"
          onClick={pagePrev}
          disabled={page <= 1 ? true : false}
        >
          Previous
        </button>
        <small className="text-xs">
          Page # {page}/{Math.ceil(totalMovies / 20)}
        </small>
        <button
          className="bg bg-blue-300 p-2 rounded-2xl m-2 mr-16 mt-4"
          onClick={pageNext}
          disabled={page >= totalMovies / 20 ? true : false}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PageRoller;
