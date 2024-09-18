import React, { useEffect, useState } from "react";
import { tmdbImageCdn } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import SelectedMovieVideo from "./SelectedMovieVideo";
import { addSelectedMovieVideo,addSelectedMovie } from "../utils/movieslice";
import useFetchMovieVideo from "../customHooks/useFetchMovieVideo";


const MovieCard = (props) => {
  const dispatch = useDispatch() ;
  const { details } = props;


  const handlePlayVideo = () => {

    dispatch(addSelectedMovie(details.id));
  };

  const selectedMovieId = useSelector(store=>store?.movies?.selectedMovie); 
  if (details.poster_path===null) return; 
  return (
    <div className="w-36 md:w-48 pr-4 cursor-pointer">
      <img
        src={tmdbImageCdn + details.poster_path}
        alt={details.title}
        onClick={handlePlayVideo}
        id={details.id}
      />
      {selectedMovieId === details.id && <SelectedMovieVideo movieId={selectedMovieId} />}
    </div>
  );
};

export default MovieCard;
