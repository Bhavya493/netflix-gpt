import React from "react";

const MovieCard = ({ posterPath }) => {
  const movieCardURL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="w-36 pr-4">
      <img src={movieCardURL + posterPath} alt="movie" />
    </div>
  );
};

export default MovieCard;
