import { useDispatch } from "react-redux";
import { API_OPTIONS, nowPlayingMoviesApi } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieslice";
import { useEffect } from "react";


const useFetchMovies = () => {
    const dispatch = useDispatch();

    const getPlayingNowVideos = async ()=>{
        const data =  await fetch(nowPlayingMoviesApi, API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
      }
    
    useEffect(()=>{
      getPlayingNowVideos();
    }, []);
}




export default useFetchMovies;