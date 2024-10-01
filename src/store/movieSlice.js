import { createSlice } from "@reduxjs/toolkit";

const moviesReducer = createSlice({
    name: 'Movie',
    initialState: {
        movies: null,
        trailerVideo: null
    },
    reducers: {
        addMovies(state, action) {
            state.movies = action.payload;
        },
        addTrailerVideo(state, action) {
            state.trailerVideo = action.payload
        }
    }
});

export const {addMovies, addTrailerVideo} = moviesReducer.actions;
export default moviesReducer.reducer;
