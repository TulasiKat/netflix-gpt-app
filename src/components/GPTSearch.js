import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { homeBanner } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>

    <div className="absolute -z-10">
        <img src={homeBanner} alt="background" className="h-screen object-cover w-screen opacity-[0.9]" />
      </div>
    <div className="py-[20%] md:py-0">
      
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
    </>
  );
};

export default GPTSearch;
