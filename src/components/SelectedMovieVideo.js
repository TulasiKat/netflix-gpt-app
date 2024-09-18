import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetchMovieVideo from "../customHooks/useFetchMovieVideo";
import { youtubeUrl } from "../utils/constants";
import { addSelectedMovie } from "../utils/movieslice";

const SelectedMovieVideo = (props) => {
  const { movieId } = props;
  const trailerId = useFetchMovieVideo(movieId);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(addSelectedMovie(null));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      {trailerId ? (
        <>
          <div
            className="modal-background fixed inset-0 bg-black opacity-0"
            onClick={handleClose} // Close the modal when the background is clicked
            style={{ pointerEvents: "auto" }} // Ensure the background can capture clicks
          ></div>

          <iframe
            className="w-full h-full md:w-1/2 md:h-1/2 aspect-video z-60 pointer-events-auto" // Full width on mobile, half on larger screens
            src={`${youtubeUrl}${trailerId}?autoplay=1&mute=1&controls=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </>
      ) : (
        <>
          <div
            className="modal-background inset-0 fixed bg-black opacity-0"
            onClick={handleClose} // Close the modal when the background is clicked
            style={{ pointerEvents: "auto" }} // Ensure the background can capture clicks
          ></div>

<p className='text-white text-center text-xs md:text-md p-3 bg-black p-3 rounded-lg'>No Video Found for this movie !</p>
        </>
      )}
    </div>
  );
};

export default SelectedMovieVideo;
