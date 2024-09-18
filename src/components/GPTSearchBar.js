import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LanguageConstants } from "../utils/LanguageConstants";
import { API_OPTIONS } from "../utils/constants";
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
console.log(gptResults)     
    dispatch(addSearchResults(gptResults.results));
  }

  useEffect(() => {
    getSearchResults()
  }, [gptSearchText]);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" bg-[rgba(0,0,0,0.7)] mx-auto w-10/12 md:w-1/2  text-white m-4">
        <input
          type="text"
          className="p-4 m-4 w-7/12 rounded-lg text-black md:w-9/12"
          placeholder={LanguageConstants[language].GptSearchPlaceholder}
          name="gptSearch"
          ref={searchtext}
        />
        <button
          type="submit"
          className="py-4 m-2 bg-red-700  rounded-lg text-white px-4  w-3/12 md:w-2/12"
          onClick={gptSearchSubmitted}
        >
          {LanguageConstants[language].Search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
