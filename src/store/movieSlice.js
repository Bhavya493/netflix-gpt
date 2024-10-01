import { createSlice } from "@reduxjs/toolkit";

const moviesReducer = createSlice({
    name: 'Movie',
    initialState: {
        movies: null,
        trailerVideo: null,
        popularMovies: null
    },
    reducers: {
        addMovies(state, action) {
            state.movies = action.payload;
        },
        addTrailerVideo(state, action) {
            state.trailerVideo = action.payload
        },
        addPopularMovies(state, action) {
            state.popularMovies = action.payload
        }
    }
});

export const {addMovies, addTrailerVideo, addPopularMovies} = moviesReducer.actions;
export default moviesReducer.reducer;
