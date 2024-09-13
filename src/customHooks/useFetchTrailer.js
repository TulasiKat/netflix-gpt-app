import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieslice';
import { API_OPTIONS } from '../utils/constants';

const useFetchTrailer = (movieId) => {
    const dispatch = useDispatch();

    const fetchTrailerUrl = "https://api.themoviedb.org/3/movie/" + movieId + "/videos";
  
    const getMovieTrailer = async () => {
      const data = await fetch(fetchTrailerUrl, API_OPTIONS);
      const json = await data.json();

  
      const filterData = json.results.filter((each) => each.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
  
      dispatch(addTrailerVideo(trailer.key));
  
    };
  
    useEffect(() => {
      getMovieTrailer();
    }, []);
}

export default useFetchTrailer