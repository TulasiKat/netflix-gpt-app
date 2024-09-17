import React from "react";
import Header from "../components/Header";
import useFetchMovies from "../customHooks/useFetchMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";


const Browse = () => {
  useFetchMovies();
  const gptSearchStatus = useSelector(store=>store.gptSearch.showGptStatus);
 
  return (
    <div>
      <Header />

     {gptSearchStatus ? <GPTSearch /> : <>   <MainContainer />
      <SecondaryContainer /></>}
   
    </div>
  );
};

export default Browse;

