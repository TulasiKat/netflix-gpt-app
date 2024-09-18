import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const movieVideo = useSelector(store=> store?.movies?.selectedMovie);
  return (
    <div  
    className={`absolute top-[350px] md:top-[972px] bg-black w-[100%]`}
>
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
      <div className="mt-0 md:-mt-72 relative z-20 p-2 md:pl-20">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Top Rated" movies={movies.topRatedMovies} />
        <MovieList title="Upcoming" movies={movies.upcomingMovies} />
       
      </div>
    </div>
  );
};

export default SecondaryContainer;
