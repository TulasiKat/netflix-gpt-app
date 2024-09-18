import { useDispatch } from "react-redux";
import {
  API_OPTIONS,
  nowPlayingMoviesApi,
  popularMoviesApi,
  topRatedMoviesApi,
  upcomingMoviesApi,
} from "../utils/constants";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
} from "../utils/movieslice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useFetchMovies = () => {
  const movies = useSelector((store) => store.movies);
  const dispatch = useDispatch();

  const getPlayingNowVideos = async () => {
    const data = await fetch(nowPlayingMoviesApi, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  const getPopularMovies = async () => {
    const data = await fetch(popularMoviesApi, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  const gettopRatedVideos = async () => {
    const data = await fetch(topRatedMoviesApi, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  const getUpcomingMovies = async () => {
    const data = await fetch(upcomingMoviesApi, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(()=>{
    ! movies?.nowPlayingMovies && getPlayingNowVideos();
    ! movies?.popularMovies && getPopularMovies();
    ! movies?.topRatedMovies && gettopRatedVideos();
    ! movies?.upcomingMovies && getUpcomingMovies();
  }, []);

};

export default useFetchMovies;
