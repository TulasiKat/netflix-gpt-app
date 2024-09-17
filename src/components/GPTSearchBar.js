import React from "react";
import { useSelector } from "react-redux";
import { LanguageConstants } from "../utils/LanguageConstants";

const GPTSearchBar = () => {
  const language = useSelector((store) => store.language.currentLanguage);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" bg-black mx-auto w-1/2  text-white m-4">
        <input
          type="text"
          className="p-4 m-4 w-9/12 rounded-lg"
          placeholder={LanguageConstants[language].GptSearchPlaceholder}
        />
        <button
          type="submit"
          className="py-4 m-2 bg-red-700  rounded-lg text-white px-4 w-2/12"
        >
          {LanguageConstants[language].Search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
