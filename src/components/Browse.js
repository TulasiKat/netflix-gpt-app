import React from "react";
import Header from "../components/Header";
import useFetchMovies from "../customHooks/useFetchMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useFetchMovies();

  return (
    <div>
      <Header />

      {/*
      primary container -> 
        video background
        video title
      secindsry container-> 
        as movie lists
        movie lists have movie cards
      */}
      
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
