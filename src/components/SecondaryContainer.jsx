import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <div className=" bg-black">
      <div className="relative z-10 -mt-72">
        <MovieList title={"Now Playing"} movies={movies?.movies} />
        {/* <MovieList title={"Trending"} movies={movies} /> */}
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        {/* <MovieList title={"Horror"} movies={movies} /> */}
      </div>
    </div>
  );
};

export default SecondaryContainer;
