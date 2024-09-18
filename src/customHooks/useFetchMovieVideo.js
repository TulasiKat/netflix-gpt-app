import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedMovieVideo } from "../utils/movieslice";
import { API_OPTIONS } from "../utils/constants";

const useFetchMovieVideo = (movieId) => {
  const [trailerKey , setTrailerKey] = useState(null);

  const fetchTrailerUrl =
    "https://api.themoviedb.org/3/movie/" + movieId + "/videos";

  const getMovieTrailer = async () => {

    const data = await fetch(fetchTrailerUrl, API_OPTIONS);

    const json = await data.json();
    console.log(json , " is the json")

    const filterData = json?.results?.filter((each) => each.type === "Trailer");
    console.log(filterData , "is teh filter data");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    filterData?setTrailerKey(trailer?.key):setTrailerKey(0)


  };

  useEffect(() => {
    getMovieTrailer();
  }, []);

  return trailerKey;
};

export default useFetchMovieVideo;

