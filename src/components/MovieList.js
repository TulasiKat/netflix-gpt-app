import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { title, movies } = props;

  return (
    <div className="p-4 bg-transparent">
      <h2 className="text-xl md:text-3xl font-bold py-3 text-white">{title}</h2>
      <div className="flex overflow-x-scroll">
        {/**
         * movie cards
         */}

        <div className="flex">
          {movies?.map((each) => (
            <MovieCard key={each.id} details={each} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
