import React from "react";
import Header from "./Header";
import { useGetMovies } from "../../hooks/useGetMovies";
import MainContainer from "../MainContainer";
import SecondaryContainer from "../SecondaryContainer";
import { usePopularMovies } from "../../hooks/usePopularMovies";
import GPTSearch from "../GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useGetMovies();
  usePopularMovies();

  const showGptSearch = useSelector((state) => state.gptSearch.showGptSearch);

  return (
    <div>
      <Header />
      {/*
        Movie Container
           Video Background
           Video Title
        Secondary Container
           MoviesList
           cards
        */}
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
