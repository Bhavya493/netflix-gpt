import React from "react";
import Header from "./Header";
import { useGetMovies } from "../../hooks/useGetMovies";
import MainContainer from "../MainContainer";
import SecondaryContainer from "../SecondaryContainer";
import { usePopularMovies } from "../../hooks/usePopularMovies";

const Browse = () => {
  useGetMovies();
  usePopularMovies();

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
        <MainContainer />
        <SecondaryContainer />
    </div>
  );
};

export default Browse;
