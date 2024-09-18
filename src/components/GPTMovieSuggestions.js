import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
import { LanguageConstants } from '../utils/LanguageConstants';
 

const GPTMovieSuggestions = () => {
  const searchResults = useSelector((store) => store.movies.searchResults);
  const gptSearchText = useSelector(store => store.gptSearch.gptSearchText);
  const language = useSelector((store) => store.language.currentLanguage);

  if (!searchResults?.length && !gptSearchText) return;
  if (!searchResults?.length && gptSearchText) {
    return (
      <div className='bg-black w-8/12 m-auto opacity-90 p-6'>
      <h2  className="text-xl md:text-3xl font-bold py-3 text-white text-center">{LanguageConstants[language].NoResultsText}</h2>
      <p  className='text-white text-center text-md md:text-lg p-3'>{LanguageConstants[language].NoResultsSuggestion}</p>
    </div>
    )
  }
  return   (
    <div className='bg-black w-11/12 md:w-8/12 m-auto'>
      <MovieList title={LanguageConstants[language].SearchResultsHeading} movies={searchResults}/>
    </div>
  ) 
}

export default GPTMovieSuggestions;
