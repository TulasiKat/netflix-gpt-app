import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="absolute top-[972px] bg-black w-[100%]">
      {/**
       * movie lists
       *  popular
       *  - card*n
       *  trending
       *  nowplaying
       *  horror movies
       *
       *
       */}
      <div className="-mt-72 relative z-20 pl-20">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Top Rated" movies={movies.topRatedMovies} />
        <MovieList title="Upcoming" movies={movies.upcomingMovies} />
       
      </div>
    </div>
  );
};

export default SecondaryContainer;
