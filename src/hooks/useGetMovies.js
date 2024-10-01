import { useDispatch } from "react-redux";
import { movie_options } from "../utils/constant";
import { addMovies } from "../store/movieSlice";
import { useCallback, useEffect } from "react";

export const useGetMovies = () => {
  const dispatch = useDispatch();
  const getMovies = useCallback(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      movie_options
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(addMovies(data.results));
      });
  }, [dispatch]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);
};
