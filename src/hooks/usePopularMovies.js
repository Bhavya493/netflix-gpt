import { useCallback, useEffect } from "react";
import { movie_options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../store/movieSlice";

export const usePopularMovies = () => {
    const dispatch = useDispatch();
  const getPopularMovies = useCallback(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?page=1`, movie_options)
      .then((res) => res.json())
      .then((data) => {
        console.log('popular data', data);
        dispatch(addPopularMovies(data.results))
      });
  }, [dispatch]);

  useEffect(() => {
    getPopularMovies();
  }, [getPopularMovies]);
};
