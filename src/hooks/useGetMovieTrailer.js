import { useCallback, useEffect, useState } from "react";
import { movie_options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../store/movieSlice";

export const useGetMovieTrailer = (movieId) => {
    const [trailerData, setTrailerData] = useState(null);
    const dispatch = useDispatch();
    const getMovieTrailer = useCallback(() => {
        fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          movie_options
        )
          .then((res) => res.json())
          .then((data) => {
           console.log('data', data);
            setTrailerData(data)
          });
      }, [movieId]);
    
      useEffect(() => {
        getMovieTrailer();
      }, [getMovieTrailer]);

      const filteredTrailerData = trailerData?.results.filter((res) => res.type === 'Trailer');
      const trailer = filteredTrailerData?.length ? filteredTrailerData[0] : trailerData?.results[0];
      dispatch(addTrailerVideo(trailer))
}