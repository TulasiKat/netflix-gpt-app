import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LanguageConstants } from "../utils/LanguageConstants";
import { API_OPTIONS } from "../utils/constants";
import MovieList from "./MovieList";
import { addSearchResults } from "../utils/movieslice";
import { addSearchText } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const searchtext = useRef(null);
  const language = useSelector((store) => store.language.currentLanguage);
  const dispatch = useDispatch();
  const gptSearchText = useSelector(store => store.gptSearch.gptSearchText);

  const gptSearchSubmitted = async (event) => {
    event.preventDefault();
    dispatch(addSearchText(searchtext.current.value));
  };

  const getSearchResults = async ()=>{
    const fetchResultsApi =  "https://api.themoviedb.org/3/search/movie?query=" +gptSearchText +"&include_adult=false&language=en-US&page=1";
    const data =  await fetch(fetchResultsApi, API_OPTIONS);
    const gptResults = await data.json();
     
    dispatch(addSearchResults(gptResults.results));
  }

  useEffect(() => {
    getSearchResults()
  }, [gptSearchText]);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" bg-black mx-auto w-1/2  text-white m-4">
        <input
          type="text"
          className="p-4 m-4 w-9/12 rounded-lg text-black"
          placeholder={LanguageConstants[language].GptSearchPlaceholder}
          name="gptSearch"
          ref={searchtext}
        />
        <button
          type="submit"
          className="py-4 m-2 bg-red-700  rounded-lg text-white px-4 w-2/12"
          onClick={gptSearchSubmitted}
        >
          {LanguageConstants[language].Search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
