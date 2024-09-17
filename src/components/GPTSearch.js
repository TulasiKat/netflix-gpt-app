import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { homeBanner } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div className="">
      <div className="absolute -z-10">
        <img src={homeBanner} alt="background" className="" />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
